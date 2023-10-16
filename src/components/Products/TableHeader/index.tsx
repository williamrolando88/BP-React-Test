import { FC } from "react";
import { styles } from "./styles";

export const TableHeader: FC = () => {
  return (
    <div style={styles.headerContainer}>
      <p>Logo</p>
      <p>Nombre del Producto</p>
      <p>Descripción</p>
      <p>Fecha de Liberación</p>
      <p>Fecha de reestructuración</p>
    </div>
  );
};
