import { validateId } from "../services/validation";

export const isIdAvailable = async (id: string) => {
  const { data } = await validateId(id);

  return !data;
};
