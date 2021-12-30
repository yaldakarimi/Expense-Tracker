import "./ChartBar.css";

interface Props {
  value: number;
  label: string;
  maxValue: number;
}

const ChartBar = ({ value, label, maxValue }: Props) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div>
      <div className="chart-bar flex flex-col items-center">
        <div className="chart-bar__inner  flex flex-col justify-end bg-stone-300 w-full rounded-full border border-gray-500">
          <div
            className="chart-bar__fill bg-orange-600"
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="text-xs font-semibold text-stone-700">{label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
