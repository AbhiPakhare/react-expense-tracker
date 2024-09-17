import React, { useState, useContext, useId } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddTransaction = () => {
  const { transactions, setTransactions } = useContext(GlobalContext);

  const [inputs, setInputs] = useState({});

  const handleInput = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setInputs((oldInput) => ({ ...oldInput, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: transactions.length + 1,
      text: inputs.text,
      amount: parseInt(inputs.amount),
    };
    setTransactions([...transactions, transaction]);
    console.log(transactions);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={inputs.text || ""}
            onChange={handleInput}
            placeholder="Enter text...."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={inputs.amount || 0}
            onChange={handleInput}
            placeholder="Enter amount...."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
