import { GetProductsParser } from "../types/parsers/product";
import { apiRoutes } from "./APIRoutes";
import { serviceCaller } from "./serviceCaller";

export const getProducts = async () =>
  await serviceCaller(apiRoutes.index, { method: "GET" }, GetProductsParser);
