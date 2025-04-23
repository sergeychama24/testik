import styles from "./CartItem.module.scss";

type CartItemProps = {
  name: string;
  price: number;
  qty: number;
};

export function CartItem({ name, price, qty }: CartItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.qty}>{qty}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price * qty} руб.</span>
    </div>
  );
}
