import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getProducts } from "../services/product";
import { BPProduct } from "../types/parsers/product";

interface ContextProps {
  children: ReactNode;
}

interface ContextValues {
  productsLength: number;
  productsList: BPProduct[];
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  handlePageBefore: VoidFunction;
  handlePageNext: VoidFunction;
}

const ProductsContext = createContext<ContextValues>({} as ContextValues);

export const ProductsContextProvider: FC<ContextProps> = ({ children }) => {
  const [products, setProducts] = useState<BPProduct[]>([]);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);

  const fetchProducts = async () => {
    const { data, status } = await getProducts();

    if (data && status === 200) {
      setProducts(data);
    }
  };

  const productsList = useCallback(() => {
    const initialIndex = pageSize * page;
    const lastIndex = initialIndex + pageSize;

    return products.slice(initialIndex, lastIndex);
  }, [page, pageSize, products]);

  const handlePageNext = () => {
    const maxPage = Math.floor(products.length / pageSize);

    setPage((prevState) => (prevState + 1 < maxPage ? prevState + 1 : maxPage));
  };

  const handlePageBefore = () => {
    setPage((prevState) => (prevState - 1 >= 0 ? prevState - 1 : 0));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const contextValues: ContextValues = {
    productsLength: products.length,
    productsList: productsList(),
    pageSize,
    setPageSize,
    handlePageBefore,
    handlePageNext,
  };
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
