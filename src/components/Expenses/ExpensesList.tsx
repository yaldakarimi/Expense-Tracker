import { ExpenseModal } from "app/types";
import { NothingFound } from "components/General";
import ExpenseItem from "./ExpenseItem";

interface Props {
  items: Array<ExpenseModal>;
}

const ExpensesList = ({ items }: Props) => {
  if (!items.length) {
    return <NothingFound />;
  }
  return (
    <div>
      {items?.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ExpensesList;
