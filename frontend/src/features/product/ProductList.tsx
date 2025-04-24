import { useEffect, useState } from "react";
import { useGetAllProducts } from "./hooks.ts";
import { ProductCard } from "./ProductCard/ProductCard.tsx";
import { formatProductType } from "../../utils";
import { ProductType } from "../../types";

import styles from "./ProductList.module.scss";
import { Pagination } from "../../ui/Pagination/Pagination.tsx";

type ProductsProps = {
  type: ProductType;
};

export function ProductList({ type }: ProductsProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { result, isLoading, error } = useGetAllProducts(type, currentPage)

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  if (error) return <h1>Что-то пошло не так...</h1>

  if (isLoading) return <h1>Загружаем каталог...</h1>

  if (result) {
    return (
      <>
        {/*TODO: Add qty items*/}
        <h2>{`${formatProductType(type)} (${result.items})`}</h2>
        <div className={styles.products}>
          {/*TODO: Replace on real id*/}
          {result.data.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
        {result.pages ? (
          <Pagination maxPage={result.last} minPage={result.first} currentPage={currentPage} onNextPage={handleNextPage} onPrevPage={handlePrevPage} onPageChange={handleChangePage}/>
        ) : <h2>К сожалению все товары закончились:(</h2>}
      </>
    )
  }

  return null
}