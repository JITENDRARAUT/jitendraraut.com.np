import './index.css';

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Jitendra Raut</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Jitendra Raut</h1>
        <h3>BE IT Student • React Developer • Web Developer</h3>
        <p>
          I build modern, responsive web applications using React,
          JavaScript, and modern frontend technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn btn-outline">
            Download Resume
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a BE IT student passionate about frontend development,
          React, JavaScript, and building clean user interfaces.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="grid">
          <div className="card">React</div>
          <div className="card">JavaScript</div>
          <div className="card">HTML5</div>
          <div className="card">CSS3</div>
          <div className="card">Git &amp; GitHub</div>
          <div className="card">Cloudflare Pages</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React and deployed on Cloudflare Pages.</p>
          </div>

          <div className="project-card">
            <h3>React Web App</h3>
            <p>A responsive React application with modern UI and reusable components.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>GitHub: github.com/JITENDRARAUT</p>
      </section>
    </div>
  );
}