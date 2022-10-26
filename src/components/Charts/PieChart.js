import React from 'react'
import './styles.css'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({data,options}) {
  return (
    <div className='chart'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart