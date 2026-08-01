import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio',
    image: '/projects/portfolio.png',
    description:
      'Modern developer portfolio built with React, Vite, and Cloudflare Pages with responsive design, theme styling, and secure EmailJS contact form.',
    tech: ['React', 'Vite', 'Cloudflare Pages', 'EmailJS'],
    github: 'https://github.com/JITENDRARAUT/jitendraraut.com.np',
    live: 'https://jitendraraut.com.np',
  },
  {
    title: 'MERN Task Manager',
    image: '/projects/task-manager.png',
    description:
      'Full-stack task management application featuring RESTful API design, JWT authentication, CRUD operations, and MongoDB integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/JITENDRARAUT/mern-task-manager',
    live: 'https://taskmanager-demo.pages.dev',
  },
  {
    title: 'MERN E-Commerce',
    image: '/projects/ecommerce.png',
    description:
      'Complete e-commerce platform with secure user authentication, product catalog management, shopping cart, and order tracking.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/JITENDRARAUT/mern-ecommerce',
    live: 'https://ecommerce-demo.pages.dev',
  },
  {
    title: 'Real-Time Chat App',
    image: '/projects/chat-app.png',
    description:
      'Real-time messaging application using Socket.io for instantaneous communication, online presence indicators, and private rooms.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/JITENDRARAUT/mern-chat-app',
    live: 'https://chat-demo.pages.dev',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item) => (
                  <span key={item} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}