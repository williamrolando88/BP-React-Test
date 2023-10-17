import { CSSProperties, FC } from "react";

interface TablePaginationProps {
  onClickNext: VoidFunction;
  onClickBefore: VoidFunction;
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    gap: "0.5rem",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export const TablePagination: FC<TablePaginationProps> = ({
  onClickBefore,
  onClickNext,
}) => {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={onClickBefore}>
        &lt; Atrás
      </button>
      <button style={styles.button} onClick={onClickNext}>
        Siguiente &gt;
      </button>
    </div>
  );
};
