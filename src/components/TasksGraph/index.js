import React from 'react'
import './styles.css'
import InprogressChart from '../AllTasksGraph/InprogressChart';
import MonthlyTasks from '../AllTasksGraph/MonthlyTasks';
import CompletedChart from '../AllTasksGraph/CompletedChart';

function Features() {
  return (
    <div className='featured'>
        <div className="featured-item">
            <div className="chart-title">Tasks in progress</div>
            
            <div className="graph">
                <InprogressChart />
            </div>
        </div>

        <div className="featured-item">
        <div className="chart-title">Tasks Completed</div>
            
            <div className="graph">
                <CompletedChart />
            </div>
        </div>

        <div className="featured-item">
        <div className="chart-title">Monthly Tasks Summary</div>
            
            <div className="graph">
                <MonthlyTasks />
            </div>
        </div>
    </div>
  )
}

export default Features