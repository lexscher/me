import React, { useState } from "react";

const About = () => {
  const aboutMe = () => (
    <div className="about-cards-container">
      <div className="statement--card">
        <h3>Alexander</h3>
        <code>
          A Software Engineer with a growth mindset. By learning something new,
          today, we promise ourselves a better tomorrow. I'm not afraid to use
          my creative side when building out projects or problem solving. I'm
          magnanimously conscious while writing code, or crafting handsome
          applications.
        </code>
      </div>
      <div className="skills--card">
        <h3>Tech Stack</h3>
        {/* Dropdown to toggle front-end, back-end, devops, etc. */}
        <ul className="skills-list">
          <li className="skill">
            <code>JavaScript</code>
          </li>
          <li className="skill">
            <code>Ruby, Ruby on Rails</code>
          </li>
          <li className="skill">
            <code>Java</code>
          </li>
          <li className="skill">
            <code>NodeJS</code>
          </li>
          <li className="skill">
            <code>CSS, SASS, SCSS</code>
          </li>
          <li className="skill">
            <code>Git</code>
          </li>
          <li className="skill">
            <code>React, Redux, React Hooks</code>
          </li>
          <li className="skill">
            <code>Webpack</code>
          </li>
          <li className="skill">
            <code>Babel</code>
          </li>
          <li className="skill">
            <code>Adobe Creative Cloud</code>
          </li>
        </ul>
      </div>
      <div className="hobbies--card">
        <h3>Hobbies</h3>
        <ul className="hobbies-list">
          <li className="hobby">
            <code>Dancing</code>
          </li>
          <li className="hobby">
            <code>Playing the Cello</code>
          </li>
          <li className="hobby">
            <code>Bouldering</code>
          </li>
          <li className="hobby">
            <code>Archery</code>
          </li>
          <li className="hobby">
            <code>Learning</code>
          </li>
          <li className="hobby">
            <code>Spending time with friends and family</code>
          </li>
        </ul>
      </div>
    </div>
  );

  const aboutJsx = () => (
    <div id="about">
      <h1>About</h1>
      {/* Toggle for About Me and About You -- Conditinally render cards below */}
      {aboutMe()}
    </div>
  );

  return aboutJsx();
};

export default About;
