import { z } from "zod";

export const BPProductParser = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  logo: z.string().url(),
  date_release: z.string().datetime(),
  date_revision: z.string().datetime(),
});
export type BPProduct = z.infer<typeof BPProductParser>;

export const GetProductsParser = BPProductParser.array();
