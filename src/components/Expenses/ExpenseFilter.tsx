import React from "react";

interface Props {
  onFilterExpense: (value: string) => void;
  selectedYear: string;
}
const ExpenseFilter = ({ onFilterExpense, selectedYear }: Props) => {
  const dropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterExpense(e.target.value);
  };
  return (
    <div className="flex justify-between bg-stone-400 py-5 px-4 rounded-md mb-5">
      <label htmlFor="filterYears" className="text-zinc-50 font-bold text-lg">
        Filter by year:
      </label>
      <div className="w-4/12 pl-4">
        <select
          name="filterYears"
          value={selectedYear}
          onChange={dropdownChangeHandler}
          id="filterYears"
          className="w-full rounded-md py-1 px-2 text-stone-600 font-semibold bg-stone-50"
        >
          <option value="Choose" disabled>
            Choose a year
          </option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
