import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center text-center text-white">
            <div className="bg-gray-800 p-10 rounded-lg shadow-2xl">
                {children}
            </div>
        </div>
    );
}

export default Layout;