import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderHome from './components/HeaderHome/HeaderHome';

function App() {
  return (
    <div className="App">
        <HeaderHome />
        <Outlet />
        
    </div>
  );
}

export default App;
