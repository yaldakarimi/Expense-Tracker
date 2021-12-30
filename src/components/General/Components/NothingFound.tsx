import { MdOutlineSentimentDissatisfied } from "react-icons/md";

const NothingFound = () => {
  return (
    <div className="flex  flex-col justify-center items-center  bg-slate-400 p-3 rounded-md shadow-md">
      <MdOutlineSentimentDissatisfied className="text-3xl text-orange-200" />
      <h1 className="text-2xl font-bold text-zinc-50">No expenses found!</h1>
      <h3 className="text-lg font-semibold text-zinc-50">Try other filters.</h3>
    </div>
  );
};

export default NothingFound;
