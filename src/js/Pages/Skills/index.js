import React from "react";

const Skills = () => {
  let skillsJsx = () => (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skill-card">
        <ul>
          <li>Technical 1</li>
          <li>Technical 2</li>
        </ul>
      </div>
      <div className="skill-card">
        <ul>
          <li>Non-Technical 1</li>
          <li>Non-Technical 2</li>
        </ul>
      </div>
    </div>
  );

  return skillsJsx();
};

export default Skills;