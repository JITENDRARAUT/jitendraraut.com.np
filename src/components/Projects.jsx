const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Modern personal portfolio built with React and deployed on Cloudflare Pages.',
    tech: 'React • Vite • Cloudflare',
    live: 'https://jitendraraut.com.np',
    github: 'https://github.com/JITENDRARAUT',
  },
  {
    title: 'MERN Task Manager',
    description:
      'Full stack task management application with authentication and CRUD operations.',
    tech: 'MongoDB • Express • React • Node',
    live: '#',
    github: 'https://github.com/JITENDRARAUT',
  },
  {
    title: 'E-Commerce Frontend',
    description:
      'Responsive e-commerce interface with product filtering and shopping cart UI.',
    tech: 'React • JavaScript • CSS',
    live: '#',
    github: 'https://github.com/JITENDRARAUT',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}