import { useRoutes } from "react-router-dom";
import AddProductPage from "../components/templates/AddProductPage";
import BaseLayout from "../components/templates/BaseLayout";
import ProductIndexPage from "../components/templates/ProductIndexPage";
import { paths } from "./paths";

const Router = () =>
  useRoutes([
    {
      element: <BaseLayout />,
      path: paths.root,
      children: [
        {
          index: true,
          element: <ProductIndexPage />,
        },
        {
          path: paths.addProduct,
          element: <AddProductPage />,
        },
      ],
    },
  ]);

export default Router;
