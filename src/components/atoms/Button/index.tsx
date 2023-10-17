import { ButtonHTMLAttributes, FC } from "react";
import { getStyle } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  style: injectedStyle,
  variant = "primary",
  ...props
}) => {
  return (
    <button style={getStyle(variant, injectedStyle)} {...props}>
      {children}
    </button>
  );
};

export default Button;
