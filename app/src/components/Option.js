import React from 'react';

const Option = ({ text, checked, onChange }) => {
  return (
    <div 
      className={`flex items-center mb-2 p-2 border-2 ${checked ? 'border-green-500' : 'border-gray-200'} rounded-lg cursor-pointer transition-colors duration-200 hover:bg-green-300`}
      onClick={onChange}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden" // Esto esconderá el checkbox, pero todavía se activará al hacer clic en el div
      />
      <label className={`block w-full text-left ${checked ? 'text-black' : 'text-black'} hover:text-black`}>{text}</label>
    </div>
  );
};

export default Option;