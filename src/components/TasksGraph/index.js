import React from 'react'
import './styles.css'
import InprogressChart from '../AllTasksGraph/InprogressChart';
import MonthlyTasks from '../AllTasksGraph/MonthlyTasks';
import CompletedChart from '../AllTasksGraph/CompletedChart';
import Grid from '@mui/material/Unstable_Grid2'; 

function Features({newData}) {
  return (
    <Grid  container spacing={1} className='featured'>
        <Grid md={4} xs={12} className="featured-item">
            <div className="chart-title">Tasks in progress</div>
            
            <item className="graph">
                <InprogressChart newData={newData} />
            </item>
        </Grid>

        <Grid md={4} xs={12} className="featured-item">
            <div className="chart-title">Tasks Completed</div>

            <item className="graph">
                <CompletedChart newData={newData} />
            </item>
        </Grid>

        <Grid md={4} xs={12} alignItems='center' className="featured-item">
            <div className="chart-title">Tasks Summary</div>
            
            <item className="graph">
                <MonthlyTasks newData={newData} />
            </item>
        </Grid>
    </Grid>
  )
}

export default Features