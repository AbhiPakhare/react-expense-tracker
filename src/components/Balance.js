import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount.reduce((accumulator, item) => (accumulator += item), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{income}</h1>
    </>
  );
};
