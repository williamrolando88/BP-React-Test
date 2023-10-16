import { FC } from "react";
import { Outlet } from "react-router-dom";
import BPLogo from "../../assets/bp-logo.png";
import { styles } from "./Template.styles";

const Template: FC = () => {
  return (
    <>
      <header style={styles.header}>
        <img style={styles.bpLogo} src={BPLogo} alt="Logo Banco Pichincha" />
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Template;
