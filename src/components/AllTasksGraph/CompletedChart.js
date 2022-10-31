import React, {useState, useEffect} from 'react'
import BarChart from '../Charts/BarChart';

function CompletedChart({newData}) {

  console.log("completedData", newData)

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
        labels: newData.map((item) => item.x),
        datasets: [
          {
            data: newData.map((item) => item.completed),
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

      useEffect(() => {
        setChartData({
          labels: newData.map((item) => item.x),
          datasets: [
            {
              data: newData.map((item) => item.completed),
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
      },[newData])

  return (
    <div>
        <BarChart data={chartData} options={options} />
    </div>
    
  )
}

export default CompletedChart