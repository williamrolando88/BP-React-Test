import { FC } from "react";
import { BPProduct } from "../../../types/parsers/product";

interface ProductsRowProps {
  product: BPProduct;
}
export const ProductsRow: FC<ProductsRowProps> = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "60vw",
        flexWrap: "nowrap",
        overflow: "hidden",
      }}
    >
      <img
        style={{ height: "1rem", width: "auto" }}
        src={product.logo}
        alt={product.name}
      />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.date_release}</p>
      <p>{product.date_revision}</p>
    </div>
  );
};
