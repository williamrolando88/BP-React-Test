import { idExists } from "../services/validation";

export const isIdAvailable = async (id: string) => {
  const { data } = await idExists(id);

  return !data;
};
