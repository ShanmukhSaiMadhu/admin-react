import React from 'react'
import Chart from '../Chart'
import Features from '../Features'
import './styles.css'

function HomeComponent() {
  return (
    <div className='home'>
      <Features />
      <Chart />
    </div>
  )
}

export default HomeComponent