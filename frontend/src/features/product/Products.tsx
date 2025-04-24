import { ProductCard } from "./ProductCard/ProductCard.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import { formatProductType } from "../../utils";
import { useEffect, useState } from "react";
import { Product } from "../../types";

import styles from "./Products.module.scss";

type ProductsProps = {
  type: "tech" | "clothes" | "food";
};

export function Products({ type }: ProductsProps) {
  // TODO: Remove after
  const pages = 5;

  // TODO: Remove after
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products?type=${type}&_page=1&_per_page=5`)
      .then((res) => res.json())
      .then(({data}: Product[]) => setProducts(data));
  }, []);

  return (
    <>
      {/*TODO: Add qty items*/}
      <h2>{`${formatProductType(type)} (${products.length})`}</h2>
      <div className={styles.products}>
        {/*TODO: Replace on real id*/}
        {products.map((product, id) => (
          <ProductCard {...product} key={id} />
        ))}
      </div>
      <nav className={styles.pagination}>
        <Button>Prev</Button>
        <div>
          {/*TODO: Remove after*/}
          {Array.from({ length: pages }).map((_, id) => (
            <Button key={id}>{id + 1}</Button>
          ))}
        </div>
        <Button>Next</Button>
      </nav>
    </>
  );
}
