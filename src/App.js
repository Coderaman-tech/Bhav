import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Analysis from './components/Analysis/Analysis';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/analysis" element={<Analysis/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
