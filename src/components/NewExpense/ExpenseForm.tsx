import React, { useState } from "react";
import { NewExpenseModel } from "app/types";
import { FormInput } from "components/General";

interface Props {
  onSaveNewExpense: (newItem: NewExpenseModel) => void;
}

const ExpenseForm = ({ onSaveNewExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const amountOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const dateOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseObject = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    onSaveNewExpense(expenseObject);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend className="mb-5 font-bold text-zinc-50 text-lg ml-2 mt-2">
          Add New Expense:
        </legend>
        <div className="md:flex">
          <FormInput
            name="title"
            id="title"
            label="Title:"
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={titleOnChangeHandler}
          />

          <FormInput
            name="amount"
            id="amount"
            label="Amount:"
            type="number"
            placeholder="Enter the amount"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountOnChangeHandler}
          />

          <FormInput
            name="date"
            id="date"
            label="Date:"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateOnChangeHandler}
          />
        </div>
      </fieldset>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-2 py-1 rounded-md w-full md:w-2/12 mt-5 mr-2 text-zinc-50 font-bold bg-stone-400"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
