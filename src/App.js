import './App.css';
import HomeComponent from './components/HomeComponent';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomeComponent />
      </div>
    </div>
  );
}

export default App;
