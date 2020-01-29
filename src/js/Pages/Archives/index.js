import React, { useState } from "react";
import Display from "../../Components/Display";

const Archives = () => {
  // set state for "single archive mode"
  const [singleArchive, setSingleArchive] = useState("none");
  const [archiveDisplayMode, toggleArchiveDisplayMode] = useState(false);

  // List of versions
  const websiteVersionData = [
    {
      version: 1.0,
      waybackLink:
        "http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/",
      playbackLink: "",
      currentVersion: false
    },
    {
      version: 1.1,
      waybackLink:
        "http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/",
      playbackLink: "",
      currentVersion: false
    },
    {
      version: 2.0,
      waybackLink:
        "http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/",
      playbackLink: "",
      currentVersion: false
    },
    {
      version: 3.0,
      waybackLink:
        "http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/",
      playbackLink: "",
      currentVersion: true
    }
  ];

  // Make version list item
  const makeVersionsListItemJsx = ({ key, version, currentVersion }) => (
    <li key={key} className="versions-list-item">
      v{version}
      {currentVersion && " (current)"}
    </li>
  );

  const getVersions = websiteVersionData.map((versionData, key) =>
    makeVersionsListItemJsx({
      key,
      version: versionData.version,
      currentVersion: versionData.currentVersion
    })
  );

  const archiveDisplayJsx = archiveDisplayMode ? (
    <div className="archive-view-container">
      <h1>Showing single arcive</h1>
    </div>
  ) : (
    <p>To see a previous version of this website, click on one of the links</p>
  );

  const archivesJsx = () => (
    <div id="archives">
      <div className="archive-list-container">{getVersions}</div>
      {archiveDisplayJsx}
    </div>
  );

  return archivesJsx();
};

export default Archives;
