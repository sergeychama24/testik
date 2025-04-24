import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

export function Button({
  children,
  type = "primary",
  size = "small",
  onClick,
}: ButtonProps) {
  const classes = clsx(
    styles.btn,
    styles[`btn--size-${size}`],
    styles[`btn--type-${type}`],
  );

  return <button onClick={onClick} className={classes}>{children}</button>;
}
