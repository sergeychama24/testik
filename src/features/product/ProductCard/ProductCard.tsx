import { Button } from "../../../ui/Button/Button.tsx";
import styles from "./ProductCard.module.scss";

import { Product } from "../../../types";
import clsx from "clsx";

type ProductCardProps = Omit<Product, "id">;

export function ProductCard({
  name,
  qty,
  image,
  price,
  sale,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img src={image} alt={`Изображение товара ${name}`} />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{name}</span>
        <div className={styles.numbers}>
          {sale ? (
            <span>
              Цена: <span className={styles.accent}>{sale}</span>{" "}
              <span className={clsx(styles.accent, styles.sale)}>{price}</span>
            </span>
          ) : (
            <span>
              Цена: <span className={styles.accent}>{price}</span>
            </span>
          )}
          <span>
            <span className={styles.accent}>{qty}</span> шт.
          </span>
        </div>
        <div>
          <Button>В корзину</Button>
        </div>
      </div>
    </div>
  );
}
