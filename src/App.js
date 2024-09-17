import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalContext } from "./context/GlobalContext";
import { useState } from "react";

/**
 * The main component of the application.
 *
 * This component renders the header, balance, income-expenses, transactions list,
 * and add transaction components.
 *
 * It also provides the GlobalContext to the components.
 *
 * @returns The JSX element representing the main component.
 */
function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    console.log(JSON.stringify(transactions));

    setTransactions([...transactions, newTransaction]);
  };
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => {
      return transaction.id !== id;
    });
    setTransactions(updatedTransactions);
  };
  return (
    <div>
      <GlobalContext.Provider
        value={{
          transactions,
          setTransactions,
          addTransaction,
          deleteTransaction,
        }}
      >
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionsList />
          <AddTransaction />
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
