import { ExpenseModal } from "app/types";
import { Chart } from "components/Chart";

interface Props {
  expenses: Array<ExpenseModal>;
}

const ExpenseChart = ({ expenses }: Props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonthIndex = expense.date.getMonth();

    chartDataPoints[expenseMonthIndex].value += expense.amount;
  }
  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
};

export default ExpenseChart;
