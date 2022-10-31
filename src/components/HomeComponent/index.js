import React, {useState} from 'react'
import Features from '../TasksGraph'
import './styles.css'
import CompareGraph from '../CompareGraph'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {weekData, yearData} from '../../data'
function HomeComponent() {

  const [isYearly, setIsYearly] = useState(true)

  const handleWeekChange = () => {
    setIsYearly(false)
  }

  const handleMonthChange = () => {
    setIsYearly(true)
  }

  return (
    <div className='home'>
      <ButtonGroup sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem'}} variant="outlined" aria-label="outlined button group">
        <Button onClick={handleWeekChange}>1W</Button>
        <Button onClick={handleMonthChange}>1Y</Button>
      </ButtonGroup>

      {isYearly ? 
        <>
          <Features newData={yearData} />
          <CompareGraph newData={yearData} />
        </>
        
        :
        <>
          <Features newData={weekData} />
          <CompareGraph newData={weekData} />
        </>
      }
    </div>
  )
}

export default HomeComponent