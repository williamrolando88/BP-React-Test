import { FC, useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import { BPProduct } from "../../types/parsers/product";
import { styles } from "./Products.styles";
import { ProductsRow } from "./ProductsRow";
import { TableHeader } from "./TableHeader";

const Products: FC = () => {
  const [products, setProducts] = useState<BPProduct[]>([]);

  const fetchProducts = async () => {
    const { data, status } = await getProducts();

    if (data && status === 200) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
