import { useRoutes } from "react-router-dom";
import Template from "../components/Template";
import { paths } from "./paths";

const Router = () => useRoutes([{ element: <Template />, path: paths.root }]);

export default Router;
