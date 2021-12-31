import { useState } from "react";
import { ExpenseModal } from "app/types";
import { ExpenseFilter } from "components";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";

interface Props {
  items: Array<ExpenseModal>;
  onDeleteExpense: (id: string) => void;
}

const Expenses = ({ items, onDeleteExpense }: Props) => {
  const [filteredYear, setFilteredYear] = useState("all");
  const onFilterExpense = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  let filteredItems: Array<ExpenseModal> = [];

  if (filteredYear === "all") {
    filteredItems = items;
  } else {
    filteredItems = items?.filter(
      (item) => item.date.getFullYear().toString() === filteredYear
    );
  }

  return (
    <div className="border-2 border-stone-500 rounded-md p-4 shadow-lg">
      <ExpenseFilter
        onFilterExpense={onFilterExpense}
        selectedYear={filteredYear}
      />

      <div className=" flex justify-between mb-2  font-semibold text-lg">
        <h2 className="text-orange-600">
          {filteredYear !== "all"
            ? `Expenses in ${filteredYear}`
            : "All Expenses"}
        </h2>
        <h2 className="text-lime-600">
          {filteredItems?.length}{" "}
          {filteredItems?.length === 1 ? "item" : "items"}
        </h2>
      </div>
      {!!filteredItems?.length && filteredYear !== "all" && (
        <ExpenseChart expenses={filteredItems} />
      )}
      <ExpensesList items={filteredItems} onDeleteExpense={onDeleteExpense} />
    </div>
  );
};

export default Expenses;
