import { FC } from "react";
import { paths } from "../../../routes/paths";
import NavigationButton from "../../molecules/NavigationButton";
import ProductSearchField from "../../molecules/ProductSearchField";
import ProductsTable from "../../organisms/ProductsTable";
import { style } from "./ProductIndexPage.style";

const ProductIndexPage: FC = () => {
  return (
    <div style={style.container}>
      <div style={style.topbar}>
        <ProductSearchField />
        <NavigationButton to={paths.addProduct}>Agregar</NavigationButton>
      </div>
      <ProductsTable />
    </div>
  );
};

export default ProductIndexPage;
