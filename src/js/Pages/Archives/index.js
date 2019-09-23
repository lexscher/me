import React, { useState, useEffect } from 'react';

const Archives = () => {
  const getVersions = () => {
    return (
      <ul>
        <li className="archive-list-item">
          <a
            href="http://web.archive.org/web/20190827121143/http://www.alexanderschelchere.com/"
            target="_blank"
          >
            <code>v1.0</code>
          </a>
        </li>
        <li className="archive-list-item">
          <a
            href="http://web.archive.org/web/20190915213924/http://www.alexanderschelchere.com/"
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
      <p>THESE ARE THE OLDER VERSIONS OF MY WEBSITE</p>
      <p>
        SAVED VIA{' '}
        <a href="https://archive.org/web/" target="_blank">
          WAYBACK MACHINE
        </a>
      </p>
      {getVersions()}
    </div>
  );
};

export default Archives;
