import { Routes, Route } from 'react-router-dom';
/*Contextos*/
import { LanguageProvider } from './contexts/LanguageContext.js';
/*Componentes*/
import ScrollToTop from './components/ScrollToTop.tsx';
/*Paginas*/
import Home from './pages/Home.tsx';
import OurTeam from './pages/OurTeam.tsx';
import Tours from './pages/Tours.tsx';
import ToursVIP from './pages/ToursVIP.tsx';
import Daytrips from './pages/Daytrips.tsx';
import FreeTours from './pages/FreeTours.tsx';
import Museos from './pages/Museos.tsx';
import Vlogs from './pages/Vlogs.tsx';
import Contact from './pages/Contact.tsx';
import TourDetail from './pages/TourDetail.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Daytrips" element={<Daytrips />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/ToursVIP" element={<ToursVIP />} />
          <Route path="/FreeTours" element={<FreeTours />} />
          <Route path="/Museos" element={<Museos />} />
          <Route path="/Vlogs" element={<Vlogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/:id" element={<TourDetail />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
