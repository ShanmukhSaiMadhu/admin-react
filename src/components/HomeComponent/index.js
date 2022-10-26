import React from 'react'
import Features from '../TasksGraph'
import './styles.css'
import CompareGraph from '../CompareGraph'
function HomeComponent() {
  return (
    <div className='home'>
      <Features />
      <CompareGraph />
    </div>
  )
}

export default HomeComponent