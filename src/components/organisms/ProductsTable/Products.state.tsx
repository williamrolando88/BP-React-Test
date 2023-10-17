import { useEffect, useState } from "react";
import { getProducts } from "../../../services/product";
import { BPProduct } from "../../../types/parsers/product";

export const useProductsState = () => {
  const [products, setProducts] = useState<BPProduct[]>([]);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);

  const fetchProducts = async () => {
    const { data, status } = await getProducts();

    if (data && status === 200) {
      setProducts(data);
    }
  };

  const productsList = () => {
    const initialIndex = pageSize * page;
    const lastIndex = initialIndex + pageSize;

    return products.slice(initialIndex, lastIndex);
  };

  const handlePageNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const handlePageBefore = () => {
    setPage((prevState) => prevState - 1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    productsList: productsList(),
    pageSize,
    setPageSize,
    handlePageBefore,
    handlePageNext,
  };
};
