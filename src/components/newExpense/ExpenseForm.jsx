import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     expenseTitle: '',
  //     expenseAmount: '',
  //     expenseDate: '',
  // })

  const titleChangeHandler = (e) => {
      setExpenseTitle(e.target.value)
      // setUserInput({
      //     ...userInput,
      //     expenseTitle: e.target.value
      // });
      // setUserInput((prevState) => {
    //       return { ...prevState, expenseTitle: e.target.value };
    //   });

  };

  const amountChangeHandler = (e) => {
      setExpenseAmount(e.target.value)
      // setUserInput({
      //     ...userInput,
      //     expenseAmount: e.target.value
      // });
  };

  const dateChangeHandler = (e) => {
      setExpenseDate(e.target.value)
      // setUserInput({
      //     ...userInput,
      //     expenseDate: e.target.value
      // });
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setExpenseTitle(value);
    } else if (identifier === "amount") {
      setExpenseAmount(value);
    } else {
      setExpenseDate(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };

    props.onSaveExpenseData();
    // console.log(expenseData);
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={titleChangeHandler} 
            // {(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={expenseAmount}
            onChange={amountChangeHandler}
            // {(e) => inputChangeHandler("amount", e.target.value)}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={expenseDate}
            onChange={dateChangeHandler}
            // {(e) => inputChangeHandler("date", e.target.value)}
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
