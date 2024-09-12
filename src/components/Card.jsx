// Card.jsx
import React from 'react';

function Card({ title, description, githubLink, liveLink, imageUrl }) {
  return (
    <div className="relative max-w-md rounded overflow-hidden shadow-lg bg-white" style={{ width: '300px' }}> {/* Updated class */}
      {/* Container for image and overlay */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg text-center p-4">{description}</p>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <div className="flex justify-between mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
