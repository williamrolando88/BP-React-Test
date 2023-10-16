import { useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import { BPProduct } from "../../types/parsers/product";

export const useProductsState = () => {
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

  return { products };
};
