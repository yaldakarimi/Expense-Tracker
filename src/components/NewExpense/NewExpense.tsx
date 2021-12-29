import { Card } from "components/General";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  return (
    <Card className="bg-indigo-400 mb-5 ">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
