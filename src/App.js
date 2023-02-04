import './App.css';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { useRef } from 'react';
import { Bar, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function App() {

  const data = {
    labels: ["Mon", "Tue", "Wed", "thu"],
    datasets: [
      {
        label: "Sales Number",
        data: [3, 6, 9, 3.69],
        borderColor: "black",
        backgroundColor: ["aqua", "red", "aqua", "red"],
        borderWidth: 1,
        links: [
          "https:/www.chartjs3.com",
          "https:/www.chartjs3.com",
          "https:/www.chartjs3.com",
          "https:/www.chartjs3.com",
        ],
      },
    ],
  };

  const chartRef = useRef()
  const onClick = (e) => {
    
    if (getElementAtEvent(chartRef.current, e).length > 0){
      console.log(getElementAtEvent(chartRef.current, e)[0]);
      const dataSetIndexNum = getElementAtEvent(chartRef.current, e)[0].datasetIndex
      const dataPoint = getElementAtEvent(chartRef.current, e)[0].index
      window.open(data.datasets[dataSetIndexNum].links[dataPoint], "_blank")
    }
  }
  const options = {}
  return (
    <div className="App" style={{padding : "20px"}}>
      <div>
        <Bar
        data={data}
        options={options}
        onClick={onClick}
        ref = {chartRef}
        >

        </Bar>
      </div>
    </div>
  );
}

export default App;
