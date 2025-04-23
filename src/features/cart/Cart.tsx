import clsx from "clsx";

import styles from "./Cart.module.scss";
import cover from "../../../public/cover.webp";
import { CartItem } from "./cartItem/CartItem.tsx";
import { Button } from "../../ui/Button/Button.tsx";

const cartItems = [
  {
    id: 122,
    name: "Наруто: Ураганные хроники ультимативный ниндзя 10 Конекшен",
    image: cover,
    qty: 2,
    price: 1500,
    type: "tech",
  },
  {
    id: 228,
    name: "Чипы Lays",
    image: cover,
    qty: 1,
    price: 132,
    type: "food",
  },
  {
    id: 322,
    name: "iPhone 16 Pro Max Ultra Super Mega Alpha",
    image: cover,
    qty: 2,
    price: 14999,
    type: "tech",
  },
];

type CartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
  return (
    <div className={clsx(styles.cart, isOpen && styles.active)}>
      <span className={styles.heading}>Корзина</span>
      <ul className={styles.itemsList}>
        {cartItems.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
      <div className={styles.summary}>
        <span>
          Товаров в корзине:{" "}
          {cartItems.reduce((total, item) => {
            return total + item.qty;
          }, 0)}
        </span>
        <span>
          Итоговая сумма:{" "}
          {cartItems.reduce((total, item) => {
            const itemTotal = item.qty * item.price;
            return total + itemTotal;
          }, 0)}{" "}
          руб.
        </span>
      </div>
      <Button>Оплатить</Button>
    </div>
  );
}
