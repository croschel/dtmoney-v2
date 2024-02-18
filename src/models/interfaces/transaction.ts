import * as z from "zod";
import {
  newTransactionFormSchema,
  searchFormSchema,
} from "../../schemas/transaction";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: Date;
}

export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export type SearchFormInputs = z.infer<typeof searchFormSchema>;
