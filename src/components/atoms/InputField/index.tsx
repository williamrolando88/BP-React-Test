import { FC, InputHTMLAttributes } from "react";
import { style } from "./InputField.style";

const InputField: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input style={style} {...props} />;
};

export default InputField;
