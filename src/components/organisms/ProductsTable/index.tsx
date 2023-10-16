import { FC } from "react";
import { ProductsRow } from "../../molecules/ProductsRow";
import TableFooter from "../../molecules/TableFooter";
import { TableHeader } from "../../molecules/TableHeader";
import { useProductsState } from "./Products.state";
import { styles } from "./Products.styles";

const ProductsTable: FC = () => {
  const { products, productsList, pageSize, setPageSize } = useProductsState();

  return (
    <div style={styles.tableContainer}>
      <div>
        <TableHeader />

        {productsList.map((product) => (
          <ProductsRow key={product.id} product={product} />
        ))}
      </div>

      <TableFooter
        products={products}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default ProductsTable;
