import React from 'react';

const AboutMe = () => {
  const aboutMeJsx = () => (
    <div className="about-me">
      <img
        id="alex-photo"
        src="https://i.imgur.com/pUvyFsx.jpg"
        alt="Photo of Alexander"
      />
      <div className="about-me__content">
        <p>
          I'm a dev that sleeps in Brooklyn. I believe that by learning
          something new, today, we promise ourselves a better tomorrow. While I
          work as a full-time software engineer and coach at Flatiron School x
          WeWork, I'm completing my B.S. in Computer Science part-time.
        </p>
        <p>
          I'm also a cellist! I attended a
          {' '}
          <a href="https://tuhs.nyc/" target="_blank">
            performing arts high school
          </a>
          {' '}
          as an intrumental music major. I also studied at
          {' '}
          <a href="https://www.juilliard.edu/" target="_blank">
            Juilliard
          </a>
          's pre-college. I probably would've been persuing a career in music if
          my friends and I didn't form a robotics team during our junior year.
          That's when I fell in love with the tech field.
        </p>
        <p>
          During my free time, I love spending time with friends and the fam,
          cooking interesting dishes, boxing, reading science fiction, watching
          youtube videos, bouldering, reading manga, dancing, and indulging in
          {' '}
          <a href="https://www.amthaibistro.com/" target="_blank">
            Thai
          </a>
          {' '}
          or
          {' '}
          <a href="http://lavillapizza.com/" target="_blank">
            Italian
          </a>
          {' '}
          cuisine.
        </p>
      </div>
    </div>
  );

  return aboutMeJsx();
};

export default AboutMe;
