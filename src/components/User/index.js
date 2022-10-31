import React from 'react'
import './styles.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function User({setIsUserName, userName, setUserName}) {

    const handleChange = () => {
        if(userName === '') {
            return
        }
        setIsUserName(true)
    }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

  return (
    <div className='user-wrapper'>
        <TextField
            size='medium'
            onChange={handleUserName}
            id="input-with-icon-textfield"
            label="Username"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            ),
            }}
            variant="standard"
        />

        <Button onClick={handleChange} variant="contained" endIcon={<SendIcon />}>
            Enter
        </Button>
    </div>
    
  )
}

export default User