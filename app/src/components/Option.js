import React from 'react';

const Option = ({ text, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label>{text}</label>
    </div>
  );
};

export default Option;
