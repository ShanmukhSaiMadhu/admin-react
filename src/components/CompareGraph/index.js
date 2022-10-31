import React, {useState, useEffect} from 'react'
import './styles.css'
import LineChart from '../Charts/LineChart';

function CompareGraph(newData) {

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
        labels: newData.newData.map((item) => item.month),
        datasets: [
          {
            label: "Tasks Created",
            data: newData.newData.map((item) => item.total_tasks),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132)',
            pointRadius: 0,
          },
          {
            label: "Tasks Completed",
            data: newData.newData.map((item) => item.completed),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'blue',
            pointRadius: 0,
          },
        ],
      })

      useEffect(() => {
        setChartData({
          labels: newData.newData.map((item) => item.x),
          datasets: [
            {
              label: "Tasks Created",
              data: newData.newData.map((item) => item.total_tasks),
              borderWidth: 2,
              fill: false,
              tension: 0.25,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132)',
              pointRadius: 0,
            },
            {
              label: "Tasks Completed",
              data: newData.newData.map((item) => item.completed),
              borderWidth: 2,
              fill: false,
              tension: 0.25,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'blue',
              pointRadius: 0,
            },
          ],
        })
      },[newData])

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