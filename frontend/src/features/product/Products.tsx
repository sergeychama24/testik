import { useState } from "react";
import { useGetAllProducts } from "./hooks.ts";
import { ProductCard } from "./ProductCard/ProductCard.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import { formatProductType } from "../../utils";
import { ProductType } from "../../types";

import styles from "./Products.module.scss";

type ProductsProps = {
  type: ProductType;
};

export function Products({ type }: ProductsProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { result, isLoading, error } = useGetAllProducts(type, currentPage)

  return (
    <>
      {/*TODO: Add qty items*/}
      <h2>{`${formatProductType(type)} (${result?.items})`}</h2>
      <div className={styles.products}>
        {/*TODO: Replace on real id*/}
        {result?.data.map((product, id) => (
          <ProductCard {...product} key={id} />
        ))}
      </div>
      <nav className={styles.pagination}>
        <Button>Prev</Button>
        <div>
          {/*TODO: Remove after*/}
          {Array.from({ length: result?.pages }).map((_, id) => (
            <Button key={id}>{id + 1}</Button>
          ))}
        </div>
        <Button>Next</Button>
      </nav>
    </>
  );
}
