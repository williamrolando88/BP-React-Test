import { FC } from "react";
import { BPProduct } from "../../../types/parsers/product";
import {
  TablePageSizeSelector,
  TablePageSizeSelectorProps,
} from "../../atoms/TablePageSizeSelector";
import { TableRowCounter } from "../../atoms/TableRowCounter";
import { style } from "./TableFooter.style";

interface TableFooterProps extends TablePageSizeSelectorProps {
  products: BPProduct[];
}

const TableFooter: FC<TableFooterProps> = ({
  products,
  pageSize,
  setPageSize,
}) => {
  return (
    <div style={style}>
      <TableRowCounter products={products} />
      <TablePageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  );
};

export default TableFooter;
