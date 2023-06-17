import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;