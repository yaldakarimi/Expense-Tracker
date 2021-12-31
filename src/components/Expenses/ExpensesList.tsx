import { ExpenseModal } from "app/types";
import { NothingFound } from "components/General";
import ExpenseItem from "./ExpenseItem";

interface Props {
  items: Array<ExpenseModal>;
  onDeleteExpense: (id: string) => void;
}

const ExpensesList = ({ items, onDeleteExpense }: Props) => {
  if (!items.length) {
    return <NothingFound />;
  }
  return (
    <div>
      {items?.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
