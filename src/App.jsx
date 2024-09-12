// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import Projects from './page/Projects';
import About from './page/About'; // Import the About page
import Sidebar from './components/SideBar';// Import the Sidebar component

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar /> {/* Include the Sidebar */}
        <div className="flex-1">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} /> {/* Added About route */}
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
