import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import Button, { ButtonProps } from "../../atoms/Button";

interface NavigationButtonProps {
  children: ReactNode;
  to: string;
  variant?: ButtonProps["variant"];
}

const NavigationButton: FC<NavigationButtonProps> = ({
  children,
  to,
  variant,
}) => {
  return (
    <Link to={to}>
      <Button variant={variant}>{children}</Button>
    </Link>
  );
};

export default NavigationButton;
