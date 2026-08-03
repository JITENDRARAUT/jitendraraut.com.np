import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JR</div>

      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-social">
        <a
          href="https://github.com/JITENDRARAUT"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jitendra-narayan-raut-6b630b256"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}