import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((amount) => amount > 0)
    .reduce((accumulator, item) => (accumulator += item), 0);
  const expense =
    amount
      .filter(() => amount < 0)
      .reduce((accumulator, item) => (accumulator += item), 0) * -1;
  console.log(JSON.stringify(income));

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">₹{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">₹{expense}</p>
        </div>
      </div>
    </>
  );
};
