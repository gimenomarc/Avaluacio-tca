import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Option from './Option';
import Button from './Button';
import questions from '../data/questions';
import {make_inverter} from './Auxiliar';
import Values from '../data/Values';
import answers  from '../data/answers';
import {eval_test} from './Result';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const responses = Values();
  console.log(answers[0]['values']);
  let list_responses = useState([])
  const handleNextQuestion = () => {
    const selectedOption = currentQuestion.options.find(option => option.id === selectedOptionId);
    const categoriaQuestion = currentQuestion.categoria;
    const invertedQuestion = currentQuestion.inverted;
    const intOption = parseInt(selectedOption.id);
    let valueQuestion = intOption -1;
    list_responses[0].push(valueQuestion);
    let updatedValue = 0;
    if (invertedQuestion){
        updatedValue = make_inverter(valueQuestion);
    } 
    else{
        updatedValue = valueQuestion;
    }
    
    responses[0][categoriaQuestion]['value'] += updatedValue;
    if (responses[0][categoriaQuestion]['limit'] < responses[0][categoriaQuestion]['value']){
        responses[0][categoriaQuestion]['bool'] = true
    }
    // Realiza acciones con la opción seleccionada
    console.log('Opción seleccionada:', selectedOption,categoriaQuestion,invertedQuestion,valueQuestion,responses[0],list_responses[0]);
    if (selectedOptionId !== null) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionId(null);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
        <Layout>
            <div className="">
                {answers.map((key) => (
                    key['values'].map((value) => {
                        if (value['min'] <= responses[0][key['name']]['value'] && value['max'] >= responses[0][key['name']]['value']) {
                            return <div><p>{value['response']}<br/></p><p></p> </div>;
                        }
                        return null;
                    })
                ))}
            </div>
            {eval_test(responses[0],true)}
            <Button onClick={() => navigate('/datos-personales')}>Volver a empezar</Button>
        </Layout>
    );
  }

  const handleOptionChange = (optionId) => {
    setSelectedOptionId(optionId);
  };

  return (
    <Layout>
      <div className="mb-4 w-96">
        <h2 className="text-xl font-bold mb-2">{currentQuestion.id}. {currentQuestion.text}</h2>
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
      <Button onClick={handleNextQuestion}>Següent</Button>
    </Layout>
  );
};

export default Quiz;



