import './App.css';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { useRef } from 'react';
import { Bar } from "react-chartjs-2";

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
      },
    ],
  };

  const chartRef = useRef()
  const onClick = (e) => {
    console.log(e)
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
