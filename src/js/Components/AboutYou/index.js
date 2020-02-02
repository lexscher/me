import React, { useState } from 'react';

const AboutYou = () => {
  const [userDataLoaded, toggleUserDataLoaded] = useState(false);
  const [userData, setUserData] = useState(null);

  const getBatteryInfo = () => {
    window.navigator.getBattery().then((batteryData) => {
      console.log(batteryData);
    });
  };

  const aboutYouJsx = () => (
    <div className="about-you">
      <h1>
        Here's what
        {' '}
        <i>I think</i>
        {' '}
        I know.
      </h1>
      <p>Your information</p>
      <p>
        You've performed NUMBER out of NUMBER possible user events on this page!
      </p>
    </div>
  );

  return aboutYouJsx();
};

export default AboutYou;
