import React from "react";
import clsx from "clsx";
import "./button.css";

type ButtonVariant = "default" | "icon" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx("btn", `btn-${variant}`, `btn-${size}`, className)}
      {...props}
    >
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
      {variant !== "icon" && children}
    </button>
  );
};

export default Button;
