import { useState } from "react";
import { useGetAllProducts } from "./hooks.ts";
import { ProductCard } from "./ProductCard/ProductCard.tsx";
import { formatProductType } from "../../utils";
import { ProductType } from "../../types";
import { Pagination } from "../../ui/Pagination/Pagination.tsx";

import styles from "./ProductList.module.scss";
import clsx from "clsx";

type ProductsProps = {
  type: ProductType;
};

export function ProductList({ type }: ProductsProps) {
  const [sortBy, setSortBy] = useState<"name" | "price" | "qty">("price");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { result, isLoading, error } = useGetAllProducts(
    type,
    currentPage,
    sortBy,
  );

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  type SortType = {
    name: "name" | "price" | "qty";
    text: string;
  };

  const sorts: SortType[] = [
    {
      name: "price",
      text: "Цена",
    },
    {
      name: "qty",
      text: "Количество",
    },
    {
      name: "name",
      text: "Наименование",
    },
  ];

  if (error) return <h1>Что-то пошло не так...</h1>;

  if (isLoading) return <h1>Загружаем каталог...</h1>;

  if (result) {
    return (
      <>
        <h2>{`${formatProductType(type)} (${result.items})`}</h2>
        <div className={styles.sort}>
          <p>Сортировать по:</p>
          {sorts.map((sort) => (
            <span
              className={clsx(
                styles.sortItem,
                sortBy === sort.name && styles.active,
              )}
              onClick={() => setSortBy(sort.name)}
            >
              {sort.text}
            </span>
          ))}
        </div>
        <div className={styles.products}>
          {/*TODO: Replace on real id*/}
          {result.data.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
        {result.pages ? (
          <Pagination
            maxPage={result.last}
            minPage={result.first}
            currentPage={currentPage}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            onPageChange={handleChangePage}
          />
        ) : (
          <h2>К сожалению все товары закончились:(</h2>
        )}
      </>
    );
  }

  return null;
}
