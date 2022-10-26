import React, {useState} from 'react'
import {tasksData} from '../../data'
import BarChart from '../Charts/BarChart';

function MonthlyTasks() {

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
            data: tasksData.map((item) => item.total_tasks),
            borderWidth: 2,
            borderRadius: 5,
            fill: true,
            tension: 0.25,
            backgroundColor: 'rgb(24,223,190, 0.2)',
            borderColor: 'rgb(24,223,190, 0.6)',
            pointRadius: 0,
          }
        ],
      });
  return (
    <div>
        <BarChart data={chartData} options={options} />
    </div>
    
  )
}

export default MonthlyTasks