import { FC } from "react";
import { ProductsRow } from "../../molecules/ProductsRow";
import { TableHeader } from "../../molecules/TableHeader";
import { useProductsState } from "./Products.state";
import { styles } from "./Products.styles";

const ProductsTable: FC = () => {
  const { products } = useProductsState();

  return (
    <div style={styles.tableContainer}>
      <div>
        <TableHeader />

        {products.map((product) => (
          <ProductsRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
