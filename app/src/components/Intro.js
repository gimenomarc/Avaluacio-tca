import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Layout from './Layout';

const Intro = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/datos-personales');
    }

    return (
        <Layout>
            <h1 className="text-4xl mb-4">Test de Capacitats Atencionals (TCA)</h1>
            <div className="text-2xl mt-8">
                <p className="mb-2">Benvingut al Test LLURBA de Trastorns de la Conducta Alimentària.</p>
                <p className="mb-8">A continuació, trobaràs les instruccions per a completar el test de manera adequada. Si tens algun dubte durant el procés, si us plau, consulta el teu psicòleg.</p>
            </div>
            <div className="mb-8">
                <p className="mb-4"><span className="font-bold">1. </span>Aquest test té com a finalitat avaluar els trastorns de la conducta alimentària. S'espera que responguis amb sinceritat a cadascuna de les preguntes.</p>
                <p className="mb-4"><span className="font-bold">2. </span>El test consta de 87 ítems. Cada ítem és una frase o afirmació sobre la qual has de reflexionar i expressar el teu grau de conformitat o desacord. Hi ha cinc possibles respostes per a cada ítem: "Totalment en desacord", "En desacord", "Indiferent", "D'acord" i "Totalment d'acord".</p>
                <p className="mb-4"><span className="font-bold">3. </span>És important que llegeixis atentament cada frase abans de respondre. Comprova que entens el seu significat abans de seleccionar la resposta que millor s'ajusta a la teva opinió o experiència personal.</p>
                <p className="mb-4"><span className="font-bold">4. </span>És obligatori respondre totes les preguntes del test. No deixis cap ítem sense contestar.</p>
                <p className="mb-4"><span className="font-bold">5. </span>Un cop hagis decidit la teva resposta per a cada ítem, selecciona-la a la pantalla i prem el botó "Següent" per passar a la següent pregunta. Tingues en compte que, un cop hagis premut el botó "Següent", no podràs retrocedir i modificar les respostes anteriors. Assegura't de prendre la decisió final abans de continuar amb la següent pregunta.</p>
                <p className="mb-4"><span className="font-bold">6. </span>Recorda respondre de manera totalment sincera. No hi ha respostes correctes o incorrectes, només les teves opinions i experiències personals són importants per a l'avaluació adequada del test.</p>
                <p className="mb-4"><span className="font-bold">7. </span>Si tens alguna pregunta o dubte durant el procés de completar el test, t'animem a que ho consultis amb el teu psicòleg. Ell o ella està aquí per ajudar-te i proporcionar-te l'assistència necessària.</p>
            </div>
            <div>
                <p className="text-center">Assegura't de seguir les instruccions i completar-lo amb sinceritat i reflexió.</p>
            </div>
            <div className="flex justify-center mt-8">
                <Button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Començar test
                </Button>
            </div>
        </Layout>
    );
}

export default Intro;