import React from 'react'
import './styles.css'
import LineStyle from '@mui/icons-material/LineStyle';
import Timeline from '@mui/icons-material/Timeline';
import TrendingUp from '@mui/icons-material/TrendingUp';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-listItem active">
                        <LineStyle className='sidebar-icon' /> Home
                    </li>

                    <li className="sidebar-listItem">
                        <Timeline className='sidebar-icon' /> Analytics
                    </li>

                    <li className="sidebar-listItem">
                        <TrendingUp className='sidebar-icon' /> Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar