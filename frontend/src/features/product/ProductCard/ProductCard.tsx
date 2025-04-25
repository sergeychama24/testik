import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { Button } from "../../../ui/Button/Button.tsx";
import styles from "./ProductCard.module.scss";

import clsx from "clsx";
import { Product } from "../../../types";
import {
  addToCart,
  cartSelector,
  decrement,
  increment,
  removeFromCart,
} from "../../cart/cartSlice.ts";
import { checkHasInCart } from "../../../utils";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

type ProductCardProps = Product;

export function ProductCard({
  name,
  qty,
  image,
  price,
  sale,
  id,
}: ProductCardProps) {
  const cart = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  function addToCartHandler() {
    dispatch(
      addToCart({
        name,
        id,
        qty,
        price,
        sale,
      }),
    );
  }

  function incrementItemHandler() {
    const incrementedItem = cart.items.find((item) => item.id === id);

    if (incrementedItem) {
      if (incrementedItem.qty >= qty) {
        return;
      } else {
        dispatch(increment(id));
      }
    }
  }

  function decrementItemHandler() {
    const decrementItem = cart.items.find((item) => item.id === id);
    if (decrementItem) {
      if (decrementItem.qty <= 1) {
        dispatch(removeFromCart({ id, price, sale }));
      } else {
        dispatch(decrement(id));
      }
    }
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
        <div className={styles.addButtons}>
          {checkHasInCart(cart.items, id) ? (
            <>
              <CiCircleMinus
                size="2.3rem"
                type="rounded"
                onClick={decrementItemHandler}
              />
              <span>{`${cart.items.find((item) => item.id === id)?.qty} шт.`}</span>
              <CiCirclePlus size="2.3rem" onClick={incrementItemHandler} />
            </>
          ) : (
            <Button onClick={addToCartHandler}>В корзину</Button>
          )}
        </div>
      </div>
    </div>
  );
}
