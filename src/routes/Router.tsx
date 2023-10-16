import { useRoutes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import Template from "../components/Template";
import { paths } from "./paths";

const Router = () =>
  useRoutes([
    {
      element: <Template />,
      path: paths.root,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: paths.addProduct,
          element: <AddProduct />,
        },
      ],
    },
  ]);

export default Router;
