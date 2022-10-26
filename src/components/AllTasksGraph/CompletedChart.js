import React, {useState} from 'react'
import {tasksData} from '../../data'
import BarChart from '../Charts/BarChart';

function CompletedChart() {

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
        scales: {
            x: {
                grid: {
                  display: false
                }
            },
            y: {
                grid: {
                  display: false
                }
            }
         }
      }

    const [chartData, setChartData] = useState({
        labels: tasksData.map((item) => item.month),
        datasets: [
          {
            data: tasksData.map((item) => item.completed),
            borderWidth: 2,
            borderRadius: 5,
            fill: true,
            tension: 0.25,
            backgroundColor: 'rgb(89,69,159, 0.2)',
            borderColor: 'rgb(89,69,159, 0.6)',
            pointRadius: 0,
          }
        ],
      })

  return (
    <div>
        <BarChart data={chartData} options={options} />
    </div>
    
  )
}

export default CompletedChart