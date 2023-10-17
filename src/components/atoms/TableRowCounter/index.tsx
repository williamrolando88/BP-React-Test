import { FC } from "react";
import { useProductsContext } from "../../../hooks/useProducts";

export const TableRowCounter: FC = () => {
  const { productsLength } = useProductsContext();

  return <span>{`${productsLength} Resultados`}</span>;
};
