import React from 'react'
import './styles.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from '@mui/icons-material';

function Features() {
  return (
    <div className='featured'>
        <div className="featured-item">
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
                <span className="featured-money">$2,415</span>
                <span className="featured-money-rate">
                    -11.4 <ArrowDownwardIcon className='featured-icon negative' />
                </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
        </div>

        <div className="featured-item">
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
                <span className="featured-money">$4,387</span>
                <span className="featured-money-rate">
                    -1.2 <ArrowDownwardIcon className='featured-icon negative' />
                </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
        </div>

        <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
                <span className="featured-money">$1,543</span>
                <span className="featured-money-rate">
                    +2.7 <ArrowUpward className='featured-icon' />
                </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
        </div>
    </div>
  )
}

export default Features