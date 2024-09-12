// Sidebar.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 bg-transparent flex flex-col items-center justify-center py-4 z-10">
      <div className="flex flex-col items-center">
        <a 
          href="https://github.com/Mysooo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black my-4 hover:text-gray-700"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/akshyat-pathak-2a7958230/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black my-4 hover:text-gray-700"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://twitter.com/akshyatpathak" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black my-4 hover:text-gray-700"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href="https://leetcode.com/u/mysojinyeast/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black my-4 hover:text-gray-700"
        >
          <FaExternalLinkAlt size={24} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
