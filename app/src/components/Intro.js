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
            <p className="mb-4">El TCA és un test que mesura les capacitats atencionals d'un individu. Aquest test s'utilitza per identificar problemes d'atenció i concentració en diverses poblacions, des de nens fins a adults majors.</p>
            <Button onClick={handleClick}>Començar test</Button>
        </Layout>
    );
}

export default Intro;