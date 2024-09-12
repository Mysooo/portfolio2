import React from 'react';

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4"
      style={{ minHeight: '674.8px' }} // Fixed height
    >
      <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
      <p className="text-lg mb-4 text-center max-w-3xl">
        Hello! I’m <strong>Akshyat Pathak</strong>, a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. With a keen interest in solving complex problems and building scalable applications, I specialize in creating user-friendly and performant web applications.
      </p>
      <p className="text-lg mb-4 text-center max-w-3xl">
        I have experience working with various technologies including React, Node.js, and TypeScript, and I’m always eager to learn new tools and frameworks to stay at the forefront of the tech industry. I enjoy taking on challenging projects and turning ideas into reality through clean and efficient code.
      </p>
      <p className="text-lg text-center max-w-3xl">
        When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or exploring new tech trends. Feel free to connect with me on LinkedIn or check out my portfolio to learn more about my work and projects.
      </p>
    </div>
  );
}

export default About;
