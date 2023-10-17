import { FC } from "react";
import { useProductsContext } from "../../../hooks/useProducts";
import { styles } from "./TablePagination.styles";

export const TablePagination: FC = () => {
  const { handlePageBefore, handlePageNext, pageSize, productsLength, page } =
    useProductsContext();

  const isFirstPage = page === 0;
  const isLastPage = Math.floor(productsLength / pageSize) <= page;

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={handlePageBefore}
        disabled={isFirstPage}
      >
        &lt; Atrás
      </button>
      <button
        style={styles.button}
        onClick={handlePageNext}
        disabled={isLastPage}
      >
        Siguiente &gt;
      </button>
    </div>
  );
};
