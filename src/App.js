import { Routes, Route } from 'react-router-dom';
/*Paginas*/
import Home from './pages/Home.tsx';
import Excursion from './pages/Excursion.tsx';
import Tours from './pages/Tours.tsx';
import FreeTours from './pages/FreeTours.tsx';
import Tickets from './pages/Tickets.tsx';
import OurTeam from './pages/OurTeam.tsx';
import Contact from './pages/Contact.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Excursion" element={<Excursion />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/FreeTours" element={<FreeTours />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
