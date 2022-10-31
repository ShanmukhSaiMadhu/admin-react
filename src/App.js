import React,{useState} from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import Topbar from './components/Topbar';
import User from './components/User';

function App() {
  const [isUsername, setIsUserName] = useState(false)
  const [userName, setUserName] = useState('')
  return (
    <div className="App">
      {
        !isUsername ? <User setIsUserName= {setIsUserName} setUserName={setUserName} />
        :
        <>
          <Topbar userName={userName}/>
          <div className="container">
            
            <HomeComponent />
          </div>
        </>
        
      }
    </div>
  );
}

export default App;
