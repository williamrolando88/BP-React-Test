import { FC } from "react";
import { TableHeader } from "./TableHeader";
import { styles } from "./styles";

const Products: FC = () => {
  return (
    <div style={styles.tableContainer}>
      <div>
        <TableHeader />
      </div>
    </div>
  );
};

export default Products;
