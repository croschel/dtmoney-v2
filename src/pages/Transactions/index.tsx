import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionContext";
import { formatBRCurrency, formatCalendarDate } from "../../utils/format";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions
  );
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {formatBRCurrency(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.type}</td>
                <td>{formatCalendarDate(transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
