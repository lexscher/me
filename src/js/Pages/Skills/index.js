import React from 'react';

const Skills = () => {
  const skillsJsx = () => (
    <div id="skills">
      <h1>Shhhh, do not tell them you saw me...</h1>
      <div className="skills-content">
        <div className="technical-skills-card">
          <div>
            <h2>Technical Skills</h2>
          </div>
          <ul>
            <li>JavaScript</li>
            <li>Ruby, Ruby on Rails</li>
            <li>Java</li>
            <li>NodeJS</li>
            <li>CSS, SASS, SCSS</li>
            <li>Git</li>
            <li>React, Redux, React Hooks</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Adobe Creative Cloud</li>
          </ul>
        </div>
        <div className="regular-skills-card">
          <ul>
            <li>Project Management</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Customer Service</li>
            <li>Research</li>
            <li>Troubleshooting</li>
          </ul>
          <h2>Non-Technical Skills</h2>
        </div>
      </div>
    </div>
  );

  return skillsJsx();
};

export default Skills;
