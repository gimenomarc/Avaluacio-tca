import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Option from './Option';
import Button from './Button';
import questions from '../data/questions';
import { make_inverter } from './Auxiliar';
import Values from '../data/Values';
import answers from '../data/answers';
import { eval_test, validate_test } from './Result';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [error, setError] = useState('');
  const responses = Values();
  const list_responses = useState([]);
  const datosExportados = window.exportedDatos; // Obtener los datos exportados de altura y peso

  const handleNextQuestion = () => {
    if (selectedOptionId === null) {
      setError('Has de seleccionar una opció.');
      return;
    }

    const selectedOption = currentQuestion.options.find(
      (option) => option.id === selectedOptionId
    );
    const categoriaQuestion = currentQuestion.categoria;
    const invertedQuestion = currentQuestion.inverted;
    const intOption = parseInt(selectedOption.id);
    let valueQuestion = intOption - 1;
    list_responses[0].push(valueQuestion);
    let updatedValue = 0;
    if (invertedQuestion) {
      updatedValue = make_inverter(valueQuestion);
    } else {
      updatedValue = valueQuestion;
    }

    responses[0][categoriaQuestion]['value'] += updatedValue;
    if (
      responses[0][categoriaQuestion]['limit'] <
      responses[0][categoriaQuestion]['value']
    ) {
      responses[0][categoriaQuestion]['bool'] = true;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOptionId(null);
    setError(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    if (!validate_test(list_responses[0])) {
      return (
        <Layout>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl font-bold mb-4">
              No es posible evaluar el test debido a las respuestas proporcionadas.
            </p>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate('/datos-personales')}
            >
              Volver a empezar
            </Button>
          </div>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <div className="bg-gray-100 rounded p-4 mb-4">
            {answers.map((key, index) =>
              key['values'].map((value) => {
                if (
                  value['min'] <= responses[0][key['name']]['value'] &&
                  value['max'] >= responses[0][key['name']]['value']
                ) {
                  return (
                    <div className="bg-white p-4 rounded mb-2" key={value['response']}>
                      <h3 className="text-lg font-bold">{value['title']}</h3>
                      <p>{value['response']}</p>
                    </div>
                  );
                }
                return null;
              })
            )}
          </div>
          <div className="bg-gray-100 rounded p-4 mb-4">
            {eval_test(responses[0], true)}
          </div>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/datos-personales')}
          >
            Volver a empezar
          </Button>
        </Layout>
      );
    }
  }

  const handleOptionChange = (optionId) => {
    setSelectedOptionId(optionId);
    setError(null);
  };

  return (
    <Layout>
      <div className="mb-4 w-96 mx-auto">
        <h2 className="text-xl font-bold mb-2">
          {currentQuestion.id}. {currentQuestion.text}
        </h2>
      </div>
      <div className="mb-4 w-80 mx-auto">
        {currentQuestion.options.map((option) => (
          <Option
            key={option.id}
            text={option.text}
            categoria={option.categoria}
            inverted={option.inverted}
            checked={selectedOptionId === option.id}
            onChange={() => handleOptionChange(option.id)}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
      <div className="flex justify-center">
        <Button onClick={handleNextQuestion}>Següent</Button>
      </div>
      <p className="text-center">
        Altura: <span className="font-bold">{datosExportados.altura}</span>
      </p>
      <p className="text-center">
        Peso: <span className="font-bold">{datosExportados.peso}</span>
      </p>
    </Layout>
  );
};

export default Quiz;
