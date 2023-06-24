import React from 'react';
import Option from './Option';

function Question({ question }) {
  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option) => (
        <Option key={option.id} text={option.text} categoria={option.categoria} inverted={option.inverted}/>
      ))}
    </div>
  );
}

export default Question;

