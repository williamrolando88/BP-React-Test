import { CSSProperties } from "react";

export const getStyle = (
  variant: "primary" | "secondary",
  injectedStyle?: CSSProperties
): CSSProperties => ({
  backgroundColor: variant === "primary" ? "#ffdf00" : "#ddd",
  border: "none",
  boxShadow: "none",
  padding: "1rem 2rem",
  fontWeight: "600",
  fontSize: "0.875rem",
  cursor: "pointer",
  ...injectedStyle,
});
