import { FC, InputHTMLAttributes } from "react";
import { getStyle } from "./InputField.style";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  style: injectedStyle,
  error,
  ...props
}) => {
  return <input style={getStyle(Boolean(error), injectedStyle)} {...props} />;
};

export default InputField;
