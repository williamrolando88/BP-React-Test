import { FC } from "react";
import TableCell from "./TableCell";
import { styles } from "./TableHeader.styles";

export const TableHeader: FC = () => {
  return (
    <div style={styles.headerContainer}>
      <TableCell width="small" textAlign="center">
        Logo
      </TableCell>
      <TableCell>Nombre del Producto</TableCell>
      <TableCell>Descripción</TableCell>
      <TableCell>Fecha de Liberación</TableCell>
      <TableCell width="large">Fecha de Reestructuración</TableCell>
    </div>
  );
};
