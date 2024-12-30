import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow p-4 flex items-center">
      <button 
        onClick={toggleSidebar}
        className="p-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>
    </nav>
  );
};

export default Navbar;
