import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tag">Open to internships &amp; freelance opportunities</p>

          <h1>
            Hi, I'm <span>Jitendra Raut</span>
          </h1>

          <h2>MERN Stack Full Stack Developer</h2>

          <p>
            I build modern, responsive, and scalable web applications using
            MongoDB, Express.js, React, and Node.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn btn-outline">
              Download Resume
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
  );
}