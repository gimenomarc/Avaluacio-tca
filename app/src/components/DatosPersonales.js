import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Button from './Button';
import Option from './Option';

const DatosPersonales = () => {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [aceptarProteccionDatos, setAceptarProteccionDatos] = useState(false);
    const [error, setError] = useState('');

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

    const handleAceptarProteccionDatosChange = () => {
        setAceptarProteccionDatos(!aceptarProteccionDatos);
    }

    const handleVerLeyProteccionDatos = () => {
        navigate('/llei-proteccio-dades');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !edad || !altura || !peso || !aceptarProteccionDatos) {
            setError('Falta completar todos los campos obligatorios.');
        } else {
            setError('');
            console.log(nombre, edad, altura, peso);
            navigate('/quiz');
        }
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
                    <input type="text" value={nombre} onChange={handleNombreChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!nombre && error ? 'border-red-500' : ''}`} />
                    {!nombre && error && <p className="text-red-500 text-xs italic">Falta completar el camp Nom.</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Edat:
                    </label>
                    <input type="number" value={edad} onChange={handleEdadChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!edad && error ? 'border-red-500' : ''}`} />
                    {!edad && error && <p className="text-red-500 text-xs italic">Falta completar el camp Edat.</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Alçada (cm):
                    </label>
                    <input type="number" value={altura} onChange={handleAlturaChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!altura && error ? 'border-red-500' : ''}`} />
                    {!altura && error && <p className="text-red-500 text-xs italic">Falta completar el camp Alçada.</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2">
                        Pes (kg):
                    </label>
                    <input type="number" value={peso} onChange={handlePesoChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!peso && error ? 'border-red-500' : ''}`} />
                    {!peso && error && <p className="text-red-500 text-xs italic">Falta completar el camp Pes.</p>}
                </div>
                <div className="mb-4">
                    <Option
                        text="Acceptar la Llei de protecció de dades"
                        checked={aceptarProteccionDatos}
                        onChange={handleAceptarProteccionDatosChange}
                    />
                    {!aceptarProteccionDatos && error && <p className="text-red-500 text-xs italic">Cal acceptar la Llei de protecció de dades.</p>}
                </div>
                <p
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={handleVerLeyProteccionDatos}
                >
                    Veure llei de protecció de dades
                </p>
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
                <div className="flex justify-end">
                    <Button type="submit" className="mt-4">Guardar dades</Button>
                </div>
            </form>
        </Layout>
    );
}

export default DatosPersonales;