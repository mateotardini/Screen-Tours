import { Routes, Route } from 'react-router-dom';
/*Paginas*/
import Home from './pages/Home.tsx';
import Tours from './pages/Tours.tsx';
import OurTeam from './pages/OurTeam.tsx';
import Contact from './pages/Contact.tsx';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
