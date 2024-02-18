import { ReactNode, createContext, useEffect, useState } from "react";
import {
  NewTransactionFormInputs,
  Transaction,
} from "../models/interfaces/transaction";
import { api } from "../lib/axios";

interface FetchParams {
  query?: string;
}

type NewTransactionParams = Omit<NewTransactionFormInputs, "id">;

interface TransactionContext {
  transactions: Transaction[];
  fetchTransactions: (fetchParams: FetchParams) => Promise<void>;
  createTransaction: (createParams: NewTransactionParams) => Promise<void>;
}

interface Props {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContext);

export const TransactionProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const fetchTransactions = async ({ query }: FetchParams) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(response.data);
  };

  const createTransaction = async (data: NewTransactionParams) => {
    const { category, description, price, type } = data;
    // @ts-expect-error - json server will take care about creating a new id
    const newTransaction: Transaction = {
      description,
      price,
      type,
      category,
      createdAt: new Date(),
    };
    const response = await api.post("/transactions", {
      ...newTransaction,
    });
    setTransactions((prevState) => [response.data, ...prevState]);
  };

  useEffect(() => {
    fetchTransactions({});
  }, []);
  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
