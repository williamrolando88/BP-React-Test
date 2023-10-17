import { FC } from "react";
import { TablePageSizeSelector } from "../../atoms/TablePageSizeSelector";
import { TablePagination } from "../../atoms/TablePagination";
import { TableRowCounter } from "../../atoms/TableRowCounter";
import { ProductsRow } from "../../molecules/ProductsRow";
import { TableHeader } from "../../molecules/TableHeader";
import { useProductsState } from "./Products.state";
import { styles } from "./Products.styles";

const ProductsTable: FC = () => {
  const {
    products,
    productsList,
    pageSize,
    setPageSize,
    handlePageBefore,
    handlePageNext,
  } = useProductsState();

  return (
    <div style={styles.tableContainer}>
      <div>
        <TableHeader />

        {productsList.map((product) => (
          <ProductsRow key={product.id} product={product} />
        ))}
      </div>

      <div style={styles.footer}>
        <TableRowCounter products={products} />
        <TablePagination
          onClickBefore={handlePageBefore}
          onClickNext={handlePageNext}
        />
        <TablePageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    </div>
  );
};

export default ProductsTable;
