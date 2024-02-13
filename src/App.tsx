import { TransactionProvider } from "./contexts/TransactionContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyles />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </div>
  );
}

export default App;
