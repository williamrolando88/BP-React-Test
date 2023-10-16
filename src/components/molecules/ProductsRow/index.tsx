import { FC } from "react";
import { BPProduct } from "../../../types/parsers/product";
import TableCell from "../../atoms/TableCell";
import { styles } from "./ProductsRow.styles";

interface ProductsRowProps {
  product: BPProduct;
}

export const ProductsRow: FC<ProductsRowProps> = ({ product }) => {
  return (
    <div style={styles.row}>
      <TableCell width="small" textAlign="center">
        <img style={styles.logo} src={product.logo} alt={product.name} />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.date_release}</TableCell>
      <TableCell width="large">{product.date_revision}</TableCell>
    </div>
  );
};
