import { CSSProperties } from "react";

export const getStyle = (
  error: boolean,
  injectedStyle?: CSSProperties
): CSSProperties => ({
  padding: "0.75rem",
  borderRadius: "0.5rem",
  borderColor: error ? "red" : "#aaa",
  boxShadow: "none",
  fontSize: "1rem",
  color: error ? "red" : "unset",
  borderStyle: "solid",
  ...injectedStyle,
});
