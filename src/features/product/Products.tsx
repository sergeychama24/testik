import { mockProducts } from "../../mock";

import styles from "./Products.module.scss";

import { ProductCard } from "./ProductCard/ProductCard.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import { formatProductType } from "../../utils";

type ProductsProps = {
  type: "tech" | "clothes" | "food";
};

export function Products({ type }: ProductsProps) {
  // TODO: Remove after
  const pages = 5;

  return (
    <>
      {/*TODO: Add qty items*/}
      <h2>{`${formatProductType(type)} 10`}</h2>
      <div className={styles.products}>
        {/*TODO: Replace on real id*/}
        {mockProducts.map((product, id) => (
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
