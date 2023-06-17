import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Button from './Button';

const DatosPersonales = () => {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handleEdadChange = (event) => {
        setEdad(event.target.value);
    }

    const handleAlturaChange = (event) => {
        setAltura(event.target.value);
    }

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(nombre, edad, altura, peso);
        navigate('/quiz');
    }

    return (
        <Layout>
            <h1 className="text-4xl mb-4">Dades personals</h1>
            <p className="mb-4">Per poder realitzar el test de manera més efectiva, necessitem algunes dades personals. Aquestes informacions ens ajudaran a personalitzar millor la teva experiència.</p>
            <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Nom:
                    </label>
                    <input type="text" value={nombre} onChange={handleNombreChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Edat:
                    </label>
                    <input type="number" value={edad} onChange={handleEdadChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Alçada (cm):
                    </label>
                    <input type="number" value={altura} onChange={handleAlturaChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Pes (kg):
                    </label>
                    <input type="number" value={peso} onChange={handlePesoChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <Button type="submit">Guardar dades</Button>
            </form>
        </Layout>
    );
}

export default DatosPersonales;
