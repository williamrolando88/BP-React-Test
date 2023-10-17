import { FC } from "react";
import InputField, { InputFieldProps } from "../../atoms/InputField";
import { errorTextStyle, styles } from "./FormInputField.styles";

interface FormInputField extends InputFieldProps {
  label: string;
  errorText?: string;
}

const FormInputField: FC<FormInputField> = ({ label, errorText, ...props }) => {
  return (
    <div style={styles.container}>
      <p style={styles.label}>{label}</p>
      <InputField error={Boolean(errorText)} {...props} />
      <p style={errorTextStyle(Boolean(errorText))}>{errorText}</p>
    </div>
  );
};

export default FormInputField;
