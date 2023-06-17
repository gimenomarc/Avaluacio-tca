import React from 'react';

const Intro = () => {
    return (
        <div className="h-screen bg-gray-800 flex items-center justify-center">
            <div className="p-6 max-w-sm mx-auto bg-gray-700 rounded-xl shadow-md space-x-4">
                <div className="text-white">
                    <h1 className="text-2xl font-bold mb-4">Test de Trastornos de la Conducta Alimentaria (TCA)</h1>
                    <p>El Test TCA es una herramienta de evaluación útil para detectar indicios de comportamientos alimentarios perjudiciales. Las preguntas cubren una variedad de áreas, incluyendo la autoestima, autopercepción, condiciones personales y sociales, preocupación por la apariencia física y patrones de alimentación. El test es vital para identificar tempranamente posibles problemas y poner en marcha las intervenciones necesarias.</p>
                    <button className="mt-4 px-4 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        Empezar Test
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Intro;