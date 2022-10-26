import React, {useState} from 'react'
import './styles.css'
import {tasksData} from '../../data'
import LineChart from '../Charts/LineChart';

function CompareGraph() {

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
        
      }

    const [chartData, setChartData] = useState({
        labels: tasksData.map((item) => item.month),
        datasets: [
          {
            label: "Tasks Created",
            data: tasksData.map((item) => item.total_tasks),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132)',
            pointRadius: 0,
          },
          {
            label: "Tasks Completed",
            data: tasksData.map((item) => item.completed),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'blue',
            pointRadius: 0,
          },
        ],
      })

  return (
    <div className='compare-graph'>
        <h3 className="chart-title">Task Created Vs Task Completed</h3>
        <div>
          <LineChart data={chartData} options={options} />
        </div>
    </div>
    
  )
}

export default CompareGraph