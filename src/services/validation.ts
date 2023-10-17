import { z } from "zod";
import { apiRoutes } from "./APIRoutes";
import { serviceCaller } from "./serviceCaller";

export const idExists = (id: string) => {
  const url = new URL(apiRoutes.verification);
  const params = url.searchParams;

  params.append("id", id);

  return serviceCaller(url, { method: "GET" }, z.boolean());
};
