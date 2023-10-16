import { FC } from "react";
import { Outlet } from "react-router-dom";
import BPLogo from "../../atoms/BPLogo";
import { styles } from "./Template.styles";

const BaseLayout: FC = () => {
  return (
    <>
      <header style={styles.header}>
        <BPLogo />
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
