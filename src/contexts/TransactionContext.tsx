import { ReactNode, createContext, useEffect, useState } from "react";
import { Transaction } from "../models/interfaces/transaction";
import { api } from "../lib/axios";

interface FetchParams {
  query?: string;
}

interface TransactionContext {
  transactions: Transaction[];
  fetchTransactions: (fetchParams: FetchParams) => Promise<void>;
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
        q: query,
      },
    });
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions({});
  }, []);
  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
