import React, {useState} from 'react'
import './styles.css'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function MixedChart({data,options}) {

  return (
    <div className='chart'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default MixedChart