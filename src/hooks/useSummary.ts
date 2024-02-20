import { TransactionContext } from "../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

export const useSummary = () => {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions
  );

  const summaryAmount = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      }
      if (transaction.type === "outcome") {
        acc.outcome -= transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return { summaryAmount };
};
