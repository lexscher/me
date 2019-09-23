import React from 'react';

const Archives = () => {
  const getVersions = () => {
    return (
      <ul>
        <li className="archive-list-item">
          <a
            href="http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/"
            target="_blank"
          >
            <code>v1.0</code>
          </a>
        </li>
        <li className="archive-list-item">
          <a
            href="http://web.archive.org/web/20190915213924id_/http://www.alexanderschelchere.com/"
            target="_blank"
          >
            <code> v1.1</code>
          </a>
        </li>
        <li>
          <code>v2.0 (Current) </code>
        </li>
      </ul>
    );
  };

  return (
    <div className="archives-page">
      <h1>Archives</h1>
      <h5>
        SAVED PREVIOUS VERSIONS OF THIS WEBSITE VIA{' '}
        <a href="https://archive.org/web/" target="_blank">
          WAYBACK MACHINE
        </a>
        .
      </h5>

      {getVersions()}
    </div>
  );
};

export default Archives;
