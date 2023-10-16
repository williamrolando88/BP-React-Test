import { FC, ReactNode } from "react";
import { GetCellStyleParams, getStyle } from "./TableCell.styles";

interface TableCellProps extends GetCellStyleParams {
  children: ReactNode;
}

const TableCell: FC<TableCellProps> = ({ children, ...props }) => {
  const cellStyle = getStyle(props);

  return (
    <div style={cellStyle}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </div>
  );
};

export default TableCell;
