import {
  BPProduct,
  BPProductParser,
  GetProductsParser,
} from "../types/parsers/product";
import { apiRoutes } from "./APIRoutes";
import { serviceCaller } from "./serviceCaller";

export const getProducts = async () =>
  await serviceCaller(apiRoutes.index, { method: "GET" }, GetProductsParser);

export const createProduct = async (formData: BPProduct) =>
  await serviceCaller(
    apiRoutes.index,
    {
      method: "POST",
      body: JSON.stringify(formData),
    },
    BPProductParser
  );
