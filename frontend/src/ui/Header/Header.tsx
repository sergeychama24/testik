import { CiShoppingCart } from "react-icons/ci";
import { useRef, useState } from "react";
import { Cart } from "../../features/cart/Cart.tsx";
import clsx from "clsx";

import styles from "./Header.module.scss";
import { NavLink } from "react-router";
import { useOutsideClick } from "../../features/cart/hooks.ts";

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useOutsideClick(cartRef, () => setIsOpenCart(false));

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <NavLink to="/">DARK STORE</NavLink>
          </div>
          <ul className={styles.links}>
            <li>
              <NavLink
                to="food"
                className={({ isActive }) =>
                  isActive
                    ? clsx(styles.navLink, styles.activeNav)
                    : styles.navLink
                }
              >
                Еда
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tech"
                className={({ isActive }) =>
                  isActive
                    ? clsx(styles.navLink, styles.activeNav)
                    : styles.navLink
                }
              >
                Электроника
              </NavLink>
            </li>
            <li>
              <NavLink
                to="clothes"
                className={({ isActive }) =>
                  isActive
                    ? clsx(styles.navLink, styles.activeNav)
                    : styles.navLink
                }
              >
                Одежда
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Cart isOpen={isOpenCart} ref={cartRef} />
          <CiShoppingCart
            className={styles.cartIcon}
            onClick={() => setIsOpenCart((s) => !s)}
          />
        </div>
      </div>
    </header>
  );
}
