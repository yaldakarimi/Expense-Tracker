import { Card } from "components/General";
import { ExpenseModal } from "app/types";
import ExpenseDate from "./ExpenseDate";
interface Props {
  item: ExpenseModal;
}

const ExpenseItem = ({ item }: Props) => {
  return (
    <Card className="flex flex-col items-stretch sm:flex-row mb-3 bg-stone-200  border-white border">
      <div className="expenseDate">
        <ExpenseDate date={item.date} />
      </div>
      <div className="expenseTitle sm::self-center sm:flex-auto my-5">
        <h1 className="text-2xl  font-semibold text-gray-500 text-center sm:text-left">
          {item.title}
        </h1>
      </div>
      <div className="expenseAmount w-full self-center  p-1 rounded-md border-2 border-white  bg-yellow-500 sm:flex-initial sm:w-28 ">
        <h2 className="text-center self-center font-semibold text-white">
          $ {item.amount}
        </h2>
      </div>
    </Card>
  );
};

export default ExpenseItem;
