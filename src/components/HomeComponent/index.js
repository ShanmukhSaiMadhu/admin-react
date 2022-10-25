import React from 'react'
import Chart from '../Chart'
import Features from '../Features'
import './styles.css'
import {userData} from '../../data'

function HomeComponent() {
  return (
    <div className='home'>
      <Features />
      <Chart data={userData} title="User Analytics" />
    </div>
  )
}

export default HomeComponent