import React from 'react';
import moment from 'moment';

const FeedProject = (props) => {
  const {
    name,
    description,
    language,
    url,
    homepage,
    created,
    updated,
  } = props;
  const dateCreated = new Date(created);
  const dateUpdated = new Date(updated);

  return (
    <div className="live-feed-contribution-card">
      <h2>
        <code>{name}</code>
      </h2>
      {description ? <code>{description}</code> : ''}
      {language ? (
        <code>
          Language:
          {language}
        </code>
      ) : ''}
      <code>{`Last updated ${moment(dateUpdated).fromNow()}.`}</code>
      <code>
        {`Created: ${moment(dateCreated).format(
          'MMMM Do YYYY, h:mm:ss a',
        )}`}
      </code>
      {homepage ? (
        <p>
          <a href={homepage} target="_blank">
            View Homepage
          </a>
        </p>
      ) : (
        ''
      )}
      <p>
        <a href={url} target="_blank">
          View on GitHub
        </a>
      </p>
    </div>
  );
};

export default FeedProject;
