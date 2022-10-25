import React, {useState} from 'react'
import './styles.css'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({data, title}) {

      const [chartData, setChartData] = useState({
        labels: data.map((item) => item.name),
        datasets: [
          {
            data: data.map((item) => item.active),
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132)',
            pointRadius: 0,
          },
        ],
      });



    const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        aspectRatio: 3,
        interaction: {
          mode: "index",
          intersect: false,
        },
        
      };

  return (
    <div className='chart'>
        <h3 className="chart-title">{title}</h3>
        <Line data={chartData} options={options} />
    </div>
  )
}

export default Chart