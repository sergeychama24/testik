import clsx from "clsx";

import styles from "./Cart.module.scss";

type CartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
  return (
    <div className={clsx(styles.cart, isOpen && styles.active)}>
      <div>CART</div>
    </div>
  );
}
