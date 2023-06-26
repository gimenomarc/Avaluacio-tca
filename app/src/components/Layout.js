import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full text-gray-800">
        {children}
      </div>
    </div>
  );
}

export default Layout;