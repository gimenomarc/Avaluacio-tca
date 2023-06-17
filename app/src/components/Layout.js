import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-2xl max-w-4xl w-full text-white">
        {children}
      </div>
    </div>
  );
}

export default Layout;