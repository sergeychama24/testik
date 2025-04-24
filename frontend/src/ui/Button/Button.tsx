import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  type?: "primary" | "secondary" | 'rounded';
  size?: "small" | "medium" | "large";
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  type = "primary",
  size = "small",
  onClick,
  isActive,
  disabled,
}: ButtonProps) {
  const classes = clsx(
    styles.btn,
    styles[`btn--size-${size}`],
    styles[`btn--type-${type}`],
    isActive && styles[`btn--active`],
    disabled && styles[`btn--disabled`]
  );

  return <button onClick={onClick} disabled={disabled} className={classes}>{children}</button>;
}
