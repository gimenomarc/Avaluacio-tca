import React, { useState } from 'react';
import MyContext from './MyContext';
import Values from './Values';

const MyContextProvider = ({ children }) => {
  // Definir el estado o los valores iniciales del contexto
  const [responses] = Values();

  // Devolver el componente proveedor con el contexto y los valores deseados
  return (
    <MyContext.Provider responses={responses}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
