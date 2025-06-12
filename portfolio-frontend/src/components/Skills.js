import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    Backend: ['Node.js', 'Express.js'],
    Database: ['MongoDB', 'MySQL'],
    'Tools & Platforms': ['VS Code', 'Postman'],
  };

  return (
    <div className="skills-container">
      <h2>💻 Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-group">
          <h4>{category}</h4>
          <div className="chips">
            {items.map((skill, index) => (
              <span className="chip" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
