import { ExpenseModal } from "app/types";
import { Expenses, NewExpense } from "components";

const App = () => {
  const expenses: Array<ExpenseModal> = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: "799.49",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: " 294.67",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: " 450",
      date: new Date(2021, 5, 12),
    },
  ];

  const onAddExpense = (newExpense: ExpenseModal) => {
    console.log("app", newExpense);
  };

  return (
    <div className="container p-5 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="font-semibold text-4xl text-emerald-500 text-center mb-8">
        My Awesome Expense Tracker
      </h1>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
