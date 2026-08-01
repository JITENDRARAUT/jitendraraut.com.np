import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="about-container">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Jitendra Raut</strong>, a passionate
              <strong> MERN Stack Full Stack Developer</strong> and
              BE IT student from Nepal.
            </p>

            <p>
              I specialize in building modern, scalable, and responsive web
              applications using <strong>MongoDB, Express.js, React, and
              Node.js</strong>. I enjoy creating complete web solutions,
              from intuitive frontend interfaces to secure backend APIs and
              database integration.
            </p>

            <p>
              My goal is to become a professional software engineer and build
              impactful products that solve real-world problems.
            </p>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS</p>
            </div>

            <div className="info-card">
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs</p>
            </div>

            <div className="info-card">
              <h3>Database</h3>
              <p>MongoDB, Mongoose</p>
            </div>

            <div className="info-card">
              <h3>Tools</h3>
              <p>Git, GitHub, Cloudflare</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}