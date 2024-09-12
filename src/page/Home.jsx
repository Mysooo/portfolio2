import React from 'react';
import { Link } from 'react-scroll';
import Projects from './Projects';
import GoToTopButton from '../components/GoToTopButton'; // Import the button component

function Home() {
  return (
    <>
      <div 
        className="flex flex-col bg-gray-100 text-center" 
         // Container height
      >
        <header 
          className="flex flex-col items-center justify-center bg-gray-100" 
          style={{ height: '674.8px' }} // Header height
        >
          <h1 className="text-4xl font-bold mb-2">Akshyat Pathak</h1>
          <h3 className="text-xl text-gray-700 mb-4">Full Stack Developer</h3>
          <p className="text-lg text-gray-500 italic">
            Talk is cheap, let's go for the{' '}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-blue-500 hover:text-blue-700 underline cursor-pointer"
            >
              code
            </Link>.
          </p>
        </header>
        <main 
          className="flex-grow" 
          style={{ paddingTop: '20px' }} // Add padding if needed
        >
          <Projects />
        </main>
      </div>
      <GoToTopButton /> {/* Include the button component */}
    </>
  );
}

export default Home;
