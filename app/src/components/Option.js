import React from 'react';

const Option = ({ option, selected, onOptionChange }) => {
  return (
    <div className="flex items-center mb-3">
      <input 
        type="radio" 
        value={option} 
        checked={selected === option} 
        onChange={() => onOptionChange(option)} 
        className="form-radio text-indigo-600 h-5 w-5"
      />
      <label className="ml-2">{option}</label>
    </div>
  );
}

export default Option;