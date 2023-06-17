import React from 'react';
import Option from './Option.js';

const questions = [
  {
    id: 1,
    text: 'Em considero una persona controladora.',
    options: [
      { id: 1, text: 'Totalment en desacord' },
      { id: 2, text: 'en desacord' },
      { id: 3, text: 'indiferent' },
      { id: 4, text: 'd’acord' },
      { id: 5, text: 'totalment d’acord' },
    ],
  },
  
];

function Question() {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.text}</h2>
          {question.options.map((option) => (
            <Option key={option.id} text={option.text} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Question;