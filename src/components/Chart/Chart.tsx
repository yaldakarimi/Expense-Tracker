import { DataPointModel } from "app/types";
import ChartBar from "./ChartBar";

interface Props {
  dataPoints: Array<DataPointModel>;
}

const Chart = ({ dataPoints }: Props) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const maxValue = Math.max(...dataPointValues);

  return (
    <div className=" mb-5 bg-stone-200 p-2 rounded-md flex justify-around h-40">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
