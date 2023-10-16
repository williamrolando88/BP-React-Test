import { CSSProperties } from "react";

export type GetCellStyleParams = {
  width?: "small" | "medium" | "large";
  textAlign?: CSSProperties["textAlign"];
  style?: CSSProperties;
};

export const getStyle = ({
  width,
  style,
  textAlign,
}: GetCellStyleParams): CSSProperties => ({
  padding: "1rem 0",
  width: getWidth(width),
  textAlign,
  fontSize: "0.875rem",
  ...style,
});

const getWidth = (width?: GetCellStyleParams["width"]) => {
  switch (width) {
    case "small":
      return "8rem";
    case "medium":
      return "12rem";
    case "large":
      return "16rem";
    default:
      return "12rem";
  }
};
