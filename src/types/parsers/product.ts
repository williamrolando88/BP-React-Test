import { z } from "zod";

export const BPProductParser = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  logo: z.string().url(),
  date_release: z.string().datetime({ offset: true }),
  date_revision: z.string().datetime({ offset: true }),
});
export type BPProduct = z.infer<typeof BPProductParser>;

export const GetProductsParser = BPProductParser.array();
