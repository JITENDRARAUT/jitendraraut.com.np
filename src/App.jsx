import React, { useEffect, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';

export default function App() {
  const roles = [
    'React Developer',
    'Frontend Developer',
    'Web Developer',
    'UI Enthusiast',
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Jitendra Raut</h2>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <p className="tag">Available for internships</p>

            <h1>
              Hi, I'm <span>Jitendra Raut</span>
            </h1>

            <h2 className="typing">{roles[roleIndex]}</h2>

            <p>
              I create beautiful, responsive, and high-performance web
              applications using React, JavaScript, and modern frontend tools.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View Projects
              </a>

              <a href="/resume.pdf" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="/images/profile.jpg" alt="Jitendra Raut" />
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="grid">
          <motion.div
            className="project-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio built with React and deployed on Cloudflare
              Pages.
            </p>

            <p>
              <strong>Tech:</strong> React, Vite, Cloudflare
            </p>

            <a
              href="https://jitendraraut.com.np"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3>React Dashboard</h3>

            <p>
              Modern admin dashboard with charts, authentication, and
              responsive layout.
            </p>

            <p>
              <strong>Tech:</strong> React, JavaScript, CSS
            </p>

            <a
              href="https://github.com/JITENDRARAUT"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Let's Connect</h2>

        <p>Email: jitendraraut903@gmail.com</p>

        <div className="social-links">
          <a
            href="https://github.com/JITENDRARAUT"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jitendra-narayan-raut-6b630b256"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:jitendraraut903@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}