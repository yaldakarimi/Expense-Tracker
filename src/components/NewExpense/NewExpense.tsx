import { v4 as uuidv4 } from "uuid";
import { NewExpenseModel, ExpenseModal } from "app/types";
import { Card } from "components/General";
import ExpenseForm from "./ExpenseForm";

interface Props {
  onAddExpense: (newExpense: ExpenseModal) => void;
}
const NewExpense = ({ onAddExpense }: Props) => {
  const onSaveNewExpense = (newItem: NewExpenseModel) => {
    onAddExpense({
      ...newItem,
      id: uuidv4(),
    });
  };
  return (
    <Card className="bg-yellow-500 mb-5 ">
      <ExpenseForm onSaveNewExpense={onSaveNewExpense} />
    </Card>
  );
};

export default NewExpense;
