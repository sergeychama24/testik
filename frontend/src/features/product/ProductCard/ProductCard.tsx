import { Button } from "../../../ui/Button/Button.tsx";
import styles from "./ProductCard.module.scss";

import clsx from "clsx";
import { Product } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { addToCart } from "../../cart/cartSlice.ts";
import { checkHasInCart } from "../../../utils";

type ProductCardProps = Product;

export function ProductCard({
  name,
  qty,
  image,
  price,
  sale,
  id
}: ProductCardProps) {
  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  function addToCartHandler(){
    dispatch(addToCart({
      name, id, qty, price, sale}))
  }

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
              <span className={styles.accent}>{sale}</span> руб.{" "}
              <span className={clsx(styles.accent, styles.sale)}>{price}</span>
            </span>
          ) : (
            <span>
              <span className={styles.accent}>{price}</span> руб.
            </span>
          )}
          <span>
            <span className={styles.accent}>{qty}</span> шт.
          </span>
        </div>
        <div>
          {checkHasInCart(cart.items, id)
            ? (<Button>Уже в корзине</Button>)
            : <Button onClick={addToCartHandler}>В корзину</Button>
          }
        </div>
      </div>
    </div>
  );
}

