import React from "react";

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

  const archivesJsx = () => (
    <div id="archives">
        <p>
          SAVED PREVIOUS VERSIONS OF THIS WEBSITE VIA{" "}
          <a href="https://archive.org/web/" target="_blank">
            WAYBACK MACHINE
          </a>
          .
        </p>
      <div className="archive-list-container">
        {getVersions()}
      </div>
      <div className="archive-view-container">
        <h1>Showing single arcive</h1>
      </div>
    </div>
  );

  return archivesJsx();
};

export default Archives;
