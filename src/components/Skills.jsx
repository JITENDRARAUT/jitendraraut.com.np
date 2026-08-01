const skills = [
  { name: 'React.js', level: '90%' },
  { name: 'JavaScript (ES6+)', level: '88%' },
  { name: 'Node.js', level: '82%' },
  { name: 'Express.js', level: '80%' },
  { name: 'MongoDB', level: '78%' },
  { name: 'HTML & CSS', level: '95%' },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}