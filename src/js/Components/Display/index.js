import React from "react";

const Display = ({ playbackLink, waybackLink }) => {
  const displayJsx = (
    <div className="display-container">
      <video src={playbackLink}></video>
      <p>
        See live demo on <a href={waybackLink}></a>
      </p>
    </div>
  );

  return displayJsx;
};

export default Display;
