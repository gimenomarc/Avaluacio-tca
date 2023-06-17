import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Option from './Option';
import Button from './Button';
import questions from '../data/questions';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const handleNextQuestion = () => {
    if (selectedOptionId !== null) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionId(null);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <Layout>
        <div>No hay más preguntas</div>
        <Button onClick={() => navigate('/datos-personales')}>Volver a empezar</Button>
      </Layout>
    );
  }

  const handleOptionChange = (optionId) => {
    setSelectedOptionId(optionId);
  };

  return (
    <Layout>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">{currentQuestion.text}</h2>
        {currentQuestion.options.map((option) => (
          <Option
            key={option.id}
            text={option.text}
            checked={selectedOptionId === option.id}
            onChange={() => handleOptionChange(option.id)}
          />
        ))}
      </div>
      <Button onClick={handleNextQuestion}>Següent</Button>
    </Layout>
  );
};

export default Quiz;


