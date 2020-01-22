import React from "react";
import { Captioned, CaptionedStyles } from "react-awesome-slider";
// import Captioned from "react-awesome-slider/src/components/react-awesome-frame";
// import CaptionedStyles from "react-awesome-slider/src/components/react-awesome-frame/styles.scss";

const Project = props => {
  props.projectdata = {
    title,
    description,
    imgUrl,
    liveLink,
    sourceCodeLink
  };

  const projectJsx = () => (
    <div key={i} data-src={imgUrl}>
      <h3 className="single-project__title">{title}</h3>
      <p className="single-project__description">{description}</p>
      <p
        className="single-project__live-link"
        onClick={() => takeMeTo(liveLink)}
      >
        Live Website ↗
      </p>
      <p
        className="single-project__source-code-link"
        onClick={() => takeMeTo(sourceCodeLink)}
      >
        GitHub ↗
      </p>
    </div>
  );

  return projectJsx;
};

export default Project;
