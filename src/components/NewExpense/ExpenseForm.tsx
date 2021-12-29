import React, { useState, useEffect } from "react";
import { FormInput } from "components/General";

const ExpenseForm = () => {
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

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <form>
      <fieldset>
        <legend className="mb-5 font-bold text-zinc-50 text-lg">
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
    </form>
  );
};

export default ExpenseForm;
