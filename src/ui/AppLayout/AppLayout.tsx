import { Outlet } from "react-router";
import { Header } from "../Header/Header.tsx";

import styles from "./AppLayout.module.scss";

// TODO: Make Header Footer components

export function AppLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
