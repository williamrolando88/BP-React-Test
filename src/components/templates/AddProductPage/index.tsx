import { CSSProperties, FC } from "react";
import AddProductForm from "../../organisms/AddProductForm";

const styles: Record<string, CSSProperties> = {
  container: { backgroundColor: "white" },
  title: {
    textAlign: "center",
  },
};

const AddProductPage: FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Formulario de Registro</h1>
      <hr />
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
