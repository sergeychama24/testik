import { useAppSelector } from "../../app/hooks.ts";
import { CartItem } from "./CartItem/CartItem.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import clsx from "clsx";

import styles from "./Cart.module.scss";

type CartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className={clsx(styles.cart, isOpen && styles.active)}>
      <span className={styles.heading}>Корзина</span>
      {cart.totalItems ? (
        <>
          <ul className={styles.itemsList}>
            {cart.items.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </ul>
          <div className={styles.summary}>
            <span>Товаров в корзине: {cart.totalItems}</span>
            <span>
              Итоговая сумма: {cart.totalPrice}
              руб.
            </span>
          </div>
          <Button type="secondary" size="large">
            Оплатить
          </Button>
        </>
      ) : (
        <p className={styles.empty}>
          Корзина пуста. Добавьте товары чтобы перейти к оплате
        </p>
      )}
    </div>
  );
}
