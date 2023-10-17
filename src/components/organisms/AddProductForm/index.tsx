import { CSSProperties, FC } from "react";
import Button from "../../atoms/Button";
import FormInputField from "../../molecules/FormInputField";

const styles: Record<string, CSSProperties> = {
  form: {
    padding: "0 2rem",
  },
  inputsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
    margin: "3rem 0",
  },
  input: {
    width: "15rem",
  },
};

const AddProductForm: FC = () => {
  return (
    <form style={styles.form}>
      <div style={styles.inputsContainer}>
        <FormInputField label="ID" style={styles.input} />
        <FormInputField label="Nombre" style={styles.input} />
        <FormInputField label="Descripción" style={styles.input} />
        <FormInputField label="Logo" style={styles.input} />
        <FormInputField label="Fecha de Liberación" style={styles.input} />
        <FormInputField label="Fecha de Revisión" style={styles.input} />
      </div>

      <div style={styles.buttonsContainer}>
        <Button variant="secondary">Reiniciar</Button>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default AddProductForm;
