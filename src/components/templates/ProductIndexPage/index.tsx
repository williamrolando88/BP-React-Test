import { FC } from "react";
import ProductsTable from "../../organisms/ProductsTable";
import { style } from "./ProductIndexPage.style";
import ProductSearchField from "../../molecules/ProductSearchField";

const ProductIndexPage: FC = () => {
  return (
    <div style={style}>
      <ProductSearchField />
      <ProductsTable />
    </div>
  );
};

export default ProductIndexPage;
