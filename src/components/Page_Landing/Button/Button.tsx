import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost-dark";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit";
};

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  "ghost-dark": styles.ghostDark,
};

const sizeClass: Record<ButtonSize, string> = {
  md: styles.md,
  lg: styles.lg,
};

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  type = "button",
}: ButtonProps) {
  const classes = [styles.button, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export default Button;
