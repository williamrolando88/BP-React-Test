import { FC } from "react";
import { useProductsContext } from "../../../hooks/useProducts";
import { styles } from "./TablePagination.styles";

export const TablePagination: FC = () => {
  const { handlePageBefore, handlePageNext } = useProductsContext();

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handlePageBefore}>
        &lt; Atrás
      </button>
      <button style={styles.button} onClick={handlePageNext}>
        Siguiente &gt;
      </button>
    </div>
  );
};
