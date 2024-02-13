import { ReactNode, createContext, useEffect, useState } from "react";
import { Transaction } from "../models/interfaces/transaction";

interface TransactionContext {
  transactions: Transaction[];
}

interface Props {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContext);

export const TransactionProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const loadTransactions = async () => {
    const result = await fetch("http://localhost:3333/transactions").then(
      (res) => res.json()
    );
    setTransactions(result);
  };

  useEffect(() => {
    loadTransactions();
  }, []);
  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
