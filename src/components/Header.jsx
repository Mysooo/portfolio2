import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 p-4 shadow-md relative">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Akshyat Pathak</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-gray-700 focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-100 shadow-lg flex flex-col items-center space-y-4 py-4 z-50">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
