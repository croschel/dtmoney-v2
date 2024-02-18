import { ReactNode, createContext, useEffect, useState } from "react";
import { Transaction } from "../models/interfaces/transaction";

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
    const url = new URL("http://localhost:3333/transactions");
    if (query) {
      url.searchParams.append("q", query);
    }
    const result = await fetch(url).then((res) => res.json());
    setTransactions(result);
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
