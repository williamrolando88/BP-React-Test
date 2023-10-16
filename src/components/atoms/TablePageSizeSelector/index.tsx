import { FC } from "react";
import { style } from "./TablePageSizeSelector.style";

export interface TablePageSizeSelectorProps {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

export const TablePageSizeSelector: FC<TablePageSizeSelectorProps> = ({
  pageSize,
  setPageSize,
}) => {
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
