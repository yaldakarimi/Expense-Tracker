import { useState } from "react";
import { ExpenseModal } from "app/types";
import { Expenses, NewExpense } from "components";

const DUMMY_EXPENSES: Array<ExpenseModal> = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 6, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 4, 15),
  },

  {
    id: "e5",
    title: "New Laptop ",
    amount: 1100,
    date: new Date(2021, 2, 20),
  },

  {
    id: "e6",
    title: "Books",
    amount: 100.99,
    date: new Date(2021, 3, 23),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpense = (newExpense: ExpenseModal) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const onDeleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container p-5 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="font-bold text-4xl text-orange-600 text-center mb-8">
        My Awesome Expense Tracker
      </h1>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses items={expenses} onDeleteExpense={onDeleteExpense} />
    </div>
  );
};

export default App;
