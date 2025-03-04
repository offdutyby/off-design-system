"use client";

import { forwardRef, PropsWithChildren, ReactNode, Ref } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

export type ButtonType = "primary" | "tertiary" | "link" | "secondary";
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";
export type ButtonColor = "default" | "error" | "gray";

export interface ButtonPropTypes extends PropsWithChildren {
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  prefix?: ReactNode;
  tailing?: ReactNode;
  fullWidth?: boolean;
  isIconOnly?: boolean;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonPropTypes>(
  ({
    // children,
    type,
    size,
    disabled,
    color,
    // prefix,
    // tailing,
    fullWidth,
    isIconOnly,
    onClick,
    ref,
  }: ButtonPropTypes) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          styles.container,
          fullWidth && styles["full-width"],
          type && styles[type],
          size && styles[`size-${size}`],
          color && styles[`color-${color}`],
          isIconOnly && styles[`icon`]
        )}
      >
        {/* {prefix && !isIconOnly && (
          <div className={cn(styles["side-icon"])}>
            <TestIcon />
          </div>
        )}
        {children}
        {tailing && !isIconOnly && (
          <div className={cn(styles["side-icon"])}>
            <TestIcon />
          </div>
        )} */}
      </button>
    );
  }
);

export default Button;
