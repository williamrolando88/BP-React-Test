import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { searchInArray } from "../helpers/searchInArray";
import { getProducts } from "../services/product";
import { BPProduct } from "../types/parsers/product";

interface ContextProps {
  children: ReactNode;
}

interface ContextValues {
  productsLength: number;
  productsList: BPProduct[];
  pageSize: number;
  page: number;
  setPageSize: (pageSize: number) => void;
  handlePageBefore: VoidFunction;
  handlePageNext: VoidFunction;
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const ProductsContext = createContext<ContextValues>({} as ContextValues);

export const ProductsContextProvider: FC<ContextProps> = ({ children }) => {
  const [products, setProducts] = useState<BPProduct[]>([]);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  const fetchProducts = async () => {
    const { data, status } = await getProducts();

    if (data && status === 200) {
      setProducts(data);
    }
  };

  const filterProducts = useCallback(() => {
    return searchInArray(products, ["name", "description"], searchText);
  }, [products, searchText]);

  const paginateProductsList = useCallback(() => {
    const filteredProductsList = filterProducts();

    const initialIndex = pageSize * page;
    const lastIndex = initialIndex + pageSize;

    return filteredProductsList.slice(initialIndex, lastIndex);
  }, [filterProducts, page, pageSize]);

  const handlePageNext = useCallback(() => {
    const maxPage = Math.floor(products.length / pageSize);

    setPage((prevState) => (prevState + 1 < maxPage ? prevState + 1 : maxPage));
  }, [pageSize, products.length]);

  const handlePageBefore = () => {
    setPage((prevState) => (prevState - 1 >= 0 ? prevState - 1 : 0));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setPage(0);
  }, [pageSize]);

  const contextValues: ContextValues = useMemo(
    () => ({
      productsLength: filterProducts().length,
      productsList: paginateProductsList(),
      pageSize,
      page,
      setPageSize,
      handlePageBefore,
      handlePageNext,
      searchText,
      setSearchText,
    }),
    [
      filterProducts,
      paginateProductsList,
      pageSize,
      page,
      handlePageNext,
      searchText,
    ]
  );

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
