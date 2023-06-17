import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import DatosPersonales from './components/DatosPersonales';
import Quiz from './components/Quiz'; // Importa tu componente Quiz

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/datos-personales" element={<DatosPersonales />} />
        <Route path="/quiz" element={<Quiz />} /> 
      </Routes>
    </Router>
  );
}

export default App;
