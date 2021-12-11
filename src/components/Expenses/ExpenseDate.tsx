interface Props {
  date: Date;
}

const ExpenseDate = ({ date }: Props) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="flex justify-evenly box-border  bg-white p-1 text-center  text-gray-500 rounded-md border-gray-500 border-2  sm:block sm:mr-5 sm:w-24">
      <div className="font-bold text-lg">{month}</div>
      <div className="font-normal">{year}</div>
      <div className="font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
