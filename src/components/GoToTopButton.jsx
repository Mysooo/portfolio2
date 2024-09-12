import React, { useState, useEffect } from 'react';

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 w-12 h-12 border-2 border-gray-800 bg-white text-gray-800 p-2 rounded-full shadow-md ${isVisible ? 'block' : 'hidden'} transition-opacity duration-300 flex items-center justify-center`}
      aria-label="Go to Top"
    >
      {/* Arrow symbol */}
      <span className="text-2xl font-bold">↑</span>
    </button>
  );
}

export default GoToTopButton;
