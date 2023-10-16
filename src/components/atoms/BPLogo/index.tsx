import { FC } from "react";
import BPAsset from "../../../assets/bp-logo.png";
import { style } from "./BPLogo.style";

const BPLogo: FC = () => {
  return <img style={style} src={BPAsset} alt="Logo Banco Pichincha" />;
};

export default BPLogo;
