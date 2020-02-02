import React from 'react';

const SocialMedia = (props) => {
  // grab the items we need from props
  const {
    id, title, link, svgPath,
  } = props.socialMediaData;

  // Generate svg icon
  const svgIcon = () => (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title id="title" lang="en">
        {title}
      </title>
      <path d={svgPath} />
    </svg>
  );

  // Generate link - use svg icon
  const socialMediaLink = () => (
    <a href={link} target="_blank" className="social-media-item" id={id}>
      {svgIcon()}
    </a>
  );

  // return the complete social media element
  return socialMediaLink();
};

export default SocialMedia;
