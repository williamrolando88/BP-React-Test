import { CSSProperties } from "react";

export const style: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "start",
  },
  topbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};
