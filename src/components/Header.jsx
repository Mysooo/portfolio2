import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Akshyat Pathak</h1>
      <nav>
        <Link 
          to="/" 
          className="mx-4 text-gray-700 hover:text-blue-500"
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className="mx-4 text-gray-700 hover:text-blue-500"
        >
          Projects
        </Link>
        <Link 
          to="/about" 
          className="mx-4 text-gray-700 hover:text-blue-500"
        >
          About
        </Link>
        
      </nav>
    </header>
  );
}

export default Header;
