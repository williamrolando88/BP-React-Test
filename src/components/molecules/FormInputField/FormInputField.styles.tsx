import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.75rem",
    fontWeight: 600,
  },
};
export const errorTextStyle = (error?: boolean): CSSProperties => ({
  fontSize: "0.75rem",
  color: error ? "red" : "unset",
});
