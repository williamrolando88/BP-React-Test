import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    gap: "1rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
};
