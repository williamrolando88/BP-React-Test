import { ButtonHTMLAttributes, CSSProperties, FC } from "react";

const getStyle = (
  variant: "primary" | "secondary",
  injectedStyle?: CSSProperties
): CSSProperties => ({
  backgroundColor: variant === "primary" ? "#ffdf00" : "#ddd",
  border: "none",
  boxShadow: "none",
  padding: "1rem 2rem",
  fontWeight: "600",
  fontSize: "0.875rem",
  ...injectedStyle,
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
