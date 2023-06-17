import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-700 p-6">
      <ul className="flex space-x-10">
        <li className="relative group">
          <Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/infoTCA">Informació TCA</Link>
          <ul className="absolute left-0 mt-2 w-48 bg-gray-700 shadow-lg hidden group-hover:block">
            <li><Link className="block px-4 py-2 text-white hover:bg-gray-900" to="/infoTCA/pica">PICA</Link></li>
            <li><Link className="block px-4 py-2 text-white hover:bg-gray-900" to="/infoTCA/trastorn-ruminacio">TRASTORN DE RUMINACIÓ</Link></li>
            <li>
              <Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/infoTCA/trastorn-ingesta-aliments">TRASTORN D’EVITACIÓ/RESTRICCIÓ DE LA INGESTA D’ALIMENTS</Link>
            </li>
            <li>
              <Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/infoTCA/anorexia-nerviosa">ANORÈXIA NERVIOSA</Link>
            </li>
            <li>
              <Link className="block px-4 py-2 text-white hover:bg-gray-900" to="/infoTCA/bulimia-nerviosa">BULÍMIA NERVIOSA</Link>
            </li>
            <li>
              <Link className="block px-4 py-2 text-white hover:bg-gray-900" to="/infoTCA/trastorn-fartaneres">TRASTORN DE FARTANERES</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/llei-proteccio-dades">Llei de protecció de dades</Link>
        </li>
        <li><Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/normes-administracio">Normes d'administració</Link></li>
        <li><Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/">Test TCA LLURBA</Link></li>
        <li><Link className="p-3 bg-transparent text-white hover:bg-gray-900 rounded transition-colors" to="/contact">Dades de contacte</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;