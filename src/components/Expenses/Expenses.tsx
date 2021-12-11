import { ExpenseModal } from "app/types";
import ExpenseItem from "./ExpenseItem";

interface Props {
  items: Array<ExpenseModal>;
}

const Expenses = ({ items }: Props) => {
  return (
    <div className="border-2 border-rose-700 rounded-md p-4 shadow-lg">
      {items?.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Expenses;
