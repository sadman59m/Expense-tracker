import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };
  const handleChangeDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            value={enteredTitle}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={handleChangeAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            value={enteredDate}
            min="2018-01-01"
            max="2023-12-31"
            onChange={handleChangeDate}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
