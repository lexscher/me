import React, { useState } from "react";
import AboutMe from "../../Components/AboutMe";
import AboutYou from "../../Components/AboutYou";

const About = () => {
  const [aboutYouMode, toggleAboutYouMode] = useState(false);

  const aboutJsx = () => (
    <div id="about">
      <h1>
        {/* About me. */}
        <br />
        {/* <a className="about-toggle" onClick={() => toggleAboutYouMode(!aboutYouMode)}>
          {!aboutYouMode ? " me" : " you"}
        </a> */}
      </h1>
      {/* Toggle for About Me and About You -- Conditinally render cards below */}
      <div className="about-content">
        {!aboutYouMode ? <AboutMe /> : <AboutYou />}
      </div>
    </div>
  );

  return aboutJsx();
};

export default About;
