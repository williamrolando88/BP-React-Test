import { FC } from "react";
import { useProductsContext } from "../../../hooks/useProducts";
import { style } from "./TablePageSizeSelector.style";

export const TablePageSizeSelector: FC = () => {
  const { pageSize, setPageSize } = useProductsContext();

  return (
    <select
      style={style}
      name="page-size-selector"
      id="page-size-selector"
      value={pageSize}
      onChange={(e) => setPageSize(parseInt(e.target.value))}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select>
  );
};
