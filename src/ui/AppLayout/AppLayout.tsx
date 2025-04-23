import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router";

type Props = {};

// TODO: Make Header Footer components

export function AppLayout({}: Props) {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
