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

  const project = (
    <div data-src={imgUrl}>
      <p>{title}</p>
    </div>
  );

  const projectJsx = () => (
    <div data-src={imgUrl}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={`a picture of the project, ${title}.`} />
      <a href={liveLink}>Live Site</a>
      <a href={sourceCodeLink}>GitHub</a>
    </div>
  );

  return project;
};

export default Project;
