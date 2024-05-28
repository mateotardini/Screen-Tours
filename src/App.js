import { Routes, Route } from 'react-router-dom';
/*Paginas*/
import Home from './pages/Home.tsx';
import Tours from './pages/Tours.tsx';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tours" element={<Tours />} />
      </Routes>
    </div>
  );
}

export default App;
