// Projects.jsx
import React from 'react';
import Card from '../components/Card';
import projectImage2 from '../assets/image.png'; // Import the local image
import projectImage1 from '../assets/image1.png'; 
import projectImage3 from '../assets/image2.png'; 
const projects = [
  {
    title: 'Crypto Tracker',
    description: 'A real-time cryptocurrency price tracking app built with React.',
    githubLink: 'https://github.com/Mysooo/Crypto-Portfolio-Tracker',
    liveLink: 'https://main--cryptozzz.netlify.app/',
    imageUrl: projectImage1, // Use the imported image
  },
  {
    title: 'LeetCode Optimizer',
    description: 'A tool that optimizes LeetCode solutions using GenAI and Langchain.',
    githubLink: 'https://github.com/Mysooo/Leetcode_Solver',
    liveLink: 'https://mysooo-leetcode-solver-app-5jxxvz.streamlit.app/',
    imageUrl: projectImage2, // Use the imported image
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my projects and skills.',
    githubLink: 'https://github.com/your-portfolio-repo',
    liveLink: 'https://your-portfolio-link.com',
    imageUrl: projectImage3, // Use the imported image
  },
];

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      {/* Adjust the grid gap value here */}
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
