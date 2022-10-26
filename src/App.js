import './App.css';
import HomeComponent from './components/HomeComponent';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <HomeComponent />
      </div>
    </div>
  );
}

export default App;
