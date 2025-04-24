import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

export function Button({
  children,
  type = "primary",
  size = "small",
}: ButtonProps) {
  const classes = clsx(
    styles.btn,
    styles[`btn--size-${size}`],
    styles[`btn--type-${type}`],
  );

  return <button className={classes}>{children}</button>;
}
