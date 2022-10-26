import React, {useState} from 'react'
import './styles.css'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({data,options}) {

  return (
    <div className='chart'>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart