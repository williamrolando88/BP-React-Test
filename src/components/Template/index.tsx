import { Outlet } from "react-router-dom";
import BPLogo from "../../assets/bp-logo.png";

const Template = () => {
  return (
    <>
      <header>
        <img src={BPLogo} alt="Logo Banco Pichincha" />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Template;
