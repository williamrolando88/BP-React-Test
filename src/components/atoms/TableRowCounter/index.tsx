import { FC } from "react";
import { BPProduct } from "../../../types/parsers/product";

interface TableRowCounterProps {
  products: BPProduct[];
}
export const TableRowCounter: FC<TableRowCounterProps> = ({ products }) => {
  return <span>{`${products.length} Resultados`}</span>;
};
