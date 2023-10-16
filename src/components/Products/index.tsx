import { FC } from "react";
import { useProductsState } from "./Products.state";
import { styles } from "./Products.styles";
import { ProductsRow } from "./ProductsRow";
import { TableHeader } from "./TableHeader";

const Products: FC = () => {
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

export default Products;
