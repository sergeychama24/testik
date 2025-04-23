import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { Cart } from "../../features/cart/Cart.tsx";

import styles from "./Header.module.scss";

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>DARK STORE</div>
          <ul className={styles.links}>
            <li>Еда</li>
            <li>Электроника</li>
            <li>Одежда</li>
          </ul>
        </nav>
        <div>
          <Cart isOpen={isOpenCart} />
          <CiShoppingCart
            className={styles.cartIcon}
            onClick={() => setIsOpenCart((s) => !s)}
          />
        </div>
      </div>
    </header>
  );
}
