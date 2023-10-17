import { FC } from "react";
import ProductsTable from "../../organisms/ProductsTable";
import { style } from "./ProductIndexPage.style";

const ProductIndexPage: FC = () => {
  return (
    <div style={style}>
      <input type="text" placeholder="This wanna be search field..." />
      <ProductsTable />
    </div>
  );
};

export default ProductIndexPage;
