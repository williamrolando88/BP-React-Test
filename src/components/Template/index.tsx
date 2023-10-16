import { Outlet } from "react-router-dom";
import BPLogo from "../../assets/bp-logo.png";
import "./styles.css";

const Template = () => {
  return (
    <>
      <header>
        <img className="bp-logo" src={BPLogo} alt="Logo Banco Pichincha" />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Template;
