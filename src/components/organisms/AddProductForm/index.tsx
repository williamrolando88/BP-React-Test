import { FC } from "react";
import Button from "../../atoms/Button";
import FormInputField from "../../molecules/FormInputField";
import { useAddProductForm } from "./AddProductForm.state";
import { styles } from "./AddProductForm.styles";

const AddProductForm: FC = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    submitForm,
  } = useAddProductForm();

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <div style={styles.inputsContainer}>
        <FormInputField
          label="ID"
          style={styles.input}
          name="id"
          value={values.id}
          onChange={handleChange}
          errorText={touched.id ? errors.id : ""}
        />

        <FormInputField
          label="Nombre"
          style={styles.input}
          name="name"
          value={values.name}
          onChange={handleChange}
          errorText={touched.name ? errors.name : ""}
        />

        <FormInputField
          label="Descripción"
          style={styles.input}
          name="description"
          value={values.description}
          onChange={handleChange}
          errorText={touched.description ? errors.description : ""}
        />

        <FormInputField
          label="Logo"
          type="url"
          style={styles.input}
          name="logo"
          value={values.logo}
          onChange={handleChange}
          errorText={touched.logo ? errors.logo : ""}
        />

        <FormInputField
          label="Fecha de Liberación"
          type="date"
          min={new Date().toISOString()}
          style={styles.input}
          name="date_release"
          value={values.date_release}
          onChange={handleChange}
          errorText={touched.date_release ? errors.date_release : ""}
        />

        <FormInputField
          type="date"
          label="Fecha de Revisión"
          style={styles.input}
          name="date_revision"
          value={values.date_revision}
          onChange={handleChange}
          disabled
        />
      </div>

      <div style={styles.buttonsContainer}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => resetForm()}
          disabled={isSubmitting}
        >
          Reiniciar
        </Button>
        <Button type="submit" onClick={submitForm} disabled={isSubmitting}>
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
