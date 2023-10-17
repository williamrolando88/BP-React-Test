import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
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
