import { FC } from "react";
import { useProductsContext } from "../../../hooks/useProducts";
import { TablePageSizeSelector } from "../../atoms/TablePageSizeSelector";
import { TablePagination } from "../../atoms/TablePagination";
import { TableRowCounter } from "../../atoms/TableRowCounter";
import { ProductsRow } from "../../molecules/ProductsRow";
import { TableHeader } from "../../molecules/TableHeader";
import { styles } from "./Products.styles";

const ProductsTable: FC = () => {
  const { productsList } = useProductsContext();

  return (
    <div style={styles.tableContainer}>
      <div>
        <TableHeader />

        {productsList.map((product) => (
          <ProductsRow key={product.id} product={product} />
        ))}
      </div>

      <div style={styles.footer}>
        <TableRowCounter />
        <TablePagination />
        <TablePageSizeSelector />
      </div>
    </div>
  );
};

export default ProductsTable;
