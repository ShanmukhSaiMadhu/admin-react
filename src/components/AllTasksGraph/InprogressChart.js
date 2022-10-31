import React, {useState, useEffect} from 'react'
import BarChart from '../Charts/BarChart';

function InprogressChart(newData) {

  console.log("meee+>>",newData)

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
        labels: newData.newData.map((item) => item.x),
        datasets: [
          {
            data: newData.newData.map((item) => item.inprogress),
            borderWidth: 2,
            borderRadius: 5,
            fill: true,
            tension: 0.25,
            backgroundColor: 'rgb(255,0,0, 0.2)',
            borderColor: 'rgb(255,0,0, 0.6)',
            pointRadius: 0,
          }
        ],
      })

      useEffect(() => {
        setChartData({
          labels: newData.newData.map((item) => item.x),
          datasets: [
            {
              data: newData.newData.map((item) => item.inprogress),
              borderWidth: 2,
              borderRadius: 5,
              fill: true,
              tension: 0.25,
              backgroundColor: 'rgb(255,0,0, 0.2)',
              borderColor: 'rgb(255,0,0, 0.6)',
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

export default InprogressChart