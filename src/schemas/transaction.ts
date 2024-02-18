import * as z from "zod";

export const searchFormSchema = z.object({
  query: z.string(),
});

export const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});
