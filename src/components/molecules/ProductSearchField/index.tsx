import { FC } from "react";
import { useProductsContext } from "../../../hooks/useProducts";
import InputField from "../../atoms/InputField";

const ProductSearchField: FC = () => {
  const { searchText, setSearchText } = useProductsContext();
  return (
    <>
      <InputField
        placeholder="Buscar producto..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </>
  );
};

export default ProductSearchField;
