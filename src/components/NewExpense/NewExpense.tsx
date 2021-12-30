import { v4 as uuidv4 } from "uuid";
import { NewExpenseModel, ExpenseModal } from "app/types";
import { Card } from "components/General";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

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

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className="bg-yellow-500 mb-5 ">
      {!isEditing && (
        <div className="flex justify-center my-5">
          <button
            type="button"
            className="bg-stone-400 text-zinc-50 font-bold text-lg py-2 px-4 rounded-md "
            onClick={startEditingHandler}
          >
            Add New Expense
          </button>
        </div>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveNewExpense={onSaveNewExpense}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
