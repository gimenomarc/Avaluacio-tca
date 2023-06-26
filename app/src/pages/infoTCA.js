import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const InfoTCA = () => {
    return (
        <Layout>
            <div className="text-black">
                <h1 className="text-3xl font-bold mb-5">INFORMACIÓ TCA</h1>
                <p>
                    Els trastorns de la conducta alimentària i de la ingesta d'aliments es caracteritzen per una alteració persistent a l'alimentació o al comportament relacionat amb l'alimentació que porta a una alteració en el consum o en l'absorció dels aliments i que causa un deteriorament significatiu de la salut física o del funcionament psicosocial (APA, 2014). Dins d’aquest conjunt de trastorns trobem la pica, el trastorn de ruminació, el trastorn d'evitació/restricció de la ingesta d'aliments, l'anorèxia nerviosa, la bulímia nerviosa i el trastorn de fartaneres, els quals conformen un esquema de classificació que és mútuament excloent, doncs malgrat les característiques psicològiques i de comportament comuns, els trastorns difereixen substancialment en el curs clínic, els resultats i les necessitats de tractament, amb excepció de la pica (APA, 2014).
                </p>
                <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Link to="/infoTCA/pica" className="border-2 border-black rounded-lg py-4 px-6 text-center hover:bg-green-500 hover:text-black transition-colors duration-200">
                        <div className="flex justify-center items-center h-full">
                            Pica
                        </div>
                    </Link>
                    <Link to="/infoTCA/trastorn-ruminacio" className="border-2 border-black rounded-lg py-4 px-6 text-center hover:bg-green-500 hover:text-black transition-colors duration-200">
                        <div className="flex justify-center items-center h-full">
                            Trastorn de Ruminació
                        </div>
                    </Link>
                    <Link to="/infoTCA/trastorn-ingesta-aliments" className="border-2 border-black rounded-lg py-4 px-6 text-center hover:bg-green-500 hover:text-black transition-colors duration-200">
                        <div className="flex justify-center items-center h-full">
                            Trastorn d'Evitació/Restricció de la Ingesta d'Aliments
                        </div>
                    </Link>
                    <Link to="/infoTCA/anorexia-nerviosa" className="border-2 border-black rounded-lg py-4 px-6 text-center hover:bg-green-500 hover:text-black transition-colors duration-200">
                        <div className="flex justify-center items-center h-full">
                            Anorèxia Nerviosa
                        </div>
                    </Link>
                    <Link to="/infoTCA/bulimia-nerviosa" className="border-2 border-black rounded-lg py-4 px-6 text-center hover:bg-green-500 hover:text-black transition-colors duration-200">
                        <div className="flex justify-center items-center h-full">
                            Bulímia Nerviosa
                        </div>
                    </Link>
                    <Link to="/infoTCA/trastorn-fartaneres" className="border-2 border-black rounded-lg py-4 px-6 text-center hover:bg-green-500 hover:text-black transition-colors duration-200">
                        <div className="flex justify-center items-center h-full">
                            Trastorn de Fartaneres
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default InfoTCA;
