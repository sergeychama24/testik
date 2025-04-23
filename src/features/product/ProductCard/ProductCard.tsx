import { Button } from "../../../ui/Button/Button.tsx";
import styles from "./ProductCard.module.scss";

import { Product } from "../../../types";

type ProductCardProps = Omit<Product, "id">;

export function ProductCard({ name, qty, image, price }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img src={image} alt={`Изображение товара ${name}`} />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{name}</span>
        <div className={styles.numbers}>
          <span>
            Цена: <span className={styles.accent}>{price}</span>
          </span>
          <span>
            Кол-во:
            <span className={styles.accent}>{qty}</span>
          </span>
        </div>
        <div>
          <Button>В корзину</Button>
        </div>
      </div>
    </div>
  );
}
