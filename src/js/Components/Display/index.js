import React from "react";

const Display = ({ toggleArchiveDisplayMode, selectedArchiveData }) => {
  const takeMeTo = link => window.open(link);
  const { version, driveLinkID, waybackLink } = selectedArchiveData;

  const backButtonJsx = (
    <div className="archive-view--container__btn--back">
      <button
        className="btn--back"
        onClick={() => toggleArchiveDisplayMode(false)}
      >
        <code>back</code>
      </button>
    </div>
  );

  const waybackJsx = (
    <p className="wayback-p">
      Explore the site via{" "}
      <a onClick={() => takeMeTo(waybackLink)} target="_blank">
        wayback machine
      </a>{" "}
    </p>
  );

  const displayJsx = (
    <div className="archive-view-container">
      {backButtonJsx}
      <div className="archive-view--container__details">
        <h3>
          <code>Version {version.toFixed(1)}</code>
        </h3>
        <img
          className="archive-view--img"
          src={"https://drive.google.com/uc?export=view&id=" + driveLinkID}
          alt={`Image of this website at version ${version}.`}
        />
        {/* <p>
          Video Tag with Playback Link Goes Here (Or clickable pictures/gifs)
        </p> */}
        {waybackLink && waybackJsx}
      </div>
    </div>
  );

  return displayJsx;
};

export default Display;
