import React from 'react';
import { FaGithub, FaCode, FaFolder, FaStar, FaCodeBranch } from 'react-icons/fa';

export default function GitHubStats() {
  const username = 'JITENDRARAUT';

  return (
    <section id="github" className="section">
      <h2 className="section-title">GitHub Profile & Stats</h2>

      <div className="github-card">
        <div className="github-header">
          <FaGithub className="github-icon" />
          <div>
            <h3>{username}</h3>
            <p>MERN Stack Developer • Open Source Contributor</p>
          </div>
        </div>

        {/* Custom Stat Cards */}
        <div className="github-stats-grid">
          <div className="stat-box">
            <FaFolder className="stat-box-icon" />
            <div className="stat-info">
              <h4>Public Repos</h4>
              <p>4+ Projects</p>
            </div>
          </div>

          <div className="stat-box">
            <FaCode className="stat-box-icon" />
            <div className="stat-info">
              <h4>Primary Stack</h4>
              <p>React, Node.js, Express, MongoDB</p>
            </div>
          </div>

          <div className="stat-box">
            <FaCodeBranch className="stat-box-icon" />
            <div className="stat-info">
              <h4>Version Control</h4>
              <p>Git & GitHub Flow</p>
            </div>
          </div>
        </div>

        <div className="github-cta">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaGithub style={{ marginRight: '8px' }} />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}