import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import DatosPersonales from './components/DatosPersonales';
import Quiz from './components/Quiz';
import Navigation from './components/Navigation';
import Contact from './pages/contact';
import InfoTCA from './pages/infoTCA';
import TRPicaPage from './pages/TR_pica';
import TRRuminacioPage from './pages/TR_ruminacio';
import TRIngestaAlimentsPage from './pages/TR_ingestaAliments';
import TRAnorexiaNerviosaPage from './pages/TR_anorexiaNerviosa';
import TRBulimiaNerviosaPage from './pages/TR_bulimiaNerviosa';
import TRFartaneresPage from './pages/TR_fartaneres';
import LeyProteccionDatosPage from './pages/proteccioDades';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/datos-personales" element={<DatosPersonales />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/infoTCA/*" element={<InfoTCA />} />
        <Route path="/infoTCA/pica" element={<TRPicaPage />} />
        <Route path="/infoTCA/trastorn-ruminacio" element={<TRRuminacioPage />} />
        <Route path="/infoTCA/trastorn-ingesta-aliments" element={<TRIngestaAlimentsPage />} />
        <Route path="/infoTCA/anorexia-nerviosa" element={<TRAnorexiaNerviosaPage />} />
        <Route path="/infoTCA/bulimia-nerviosa" element={<TRBulimiaNerviosaPage />} />
        <Route path="/infoTCA/trastorn-fartaneres" element={<TRFartaneresPage />} />  
        <Route path="/llei-proteccio-dades" element={<LeyProteccionDatosPage />} />
      </Routes>
      <Header />
    </Router>
  );
}

export default App;
