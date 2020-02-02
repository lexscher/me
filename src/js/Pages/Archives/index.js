import React, { useState } from "react";
import Display from "../../Components/Display";

const Archives = () => {
  // set state for "single archive mode"
  const [archiveDisplayMode, toggleArchiveDisplayMode] = useState(false);
  const [selectedArchive, selectAnArchive] = useState({});

  // List of versions
  const websiteVersionData = [
    {
      version: 1.0,
      waybackLink:
        "http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/",
      driveLinkID: "1HNDTBkxdVf9vbSNrlMplxEUlfqaGSmKX",
      currentVersion: false
    },
    {
      version: 1.1,
      waybackLink:
        "http://web.archive.org/web/20190915213924id_/http://www.alexanderschelchere.com/",
      driveLinkID: "1yRwcp6n1UrnilY8O59CtAW_ksrJuhV40",
      currentVersion: false
    },
    {
      version: 2.0,
      waybackLink: null,
      driveLinkID: "10RNH04h8pYwB_UiMthSdFCHEkX3KOvKI",
      currentVersion: false
    },
    {
      version: 3.0,
      waybackLink:
        "http://web.archive.org/web/20190827121143id_/http://www.alexanderschelchere.com/",
      driveLinkID: "18Lu2hOhxTP2wxQmGeEaIue1gg_ytYVnL",
      currentVersion: true
    }
  ];

  // enables current archive view and populates it with data from selected archive
  const setArchiveView = versionData => {
    selectAnArchive(versionData);
    toggleArchiveDisplayMode(true);
  };

  // Make version list item
  const makeVersionsListItemJsx = ({ key, versionData }) => {
    const { currentVersion, version } = versionData;

    const versionLiJsx = (
      <li
        key={key}
        onClick={() => !currentVersion && setArchiveView(versionData)}
        className={`versions-list-item ${currentVersion &&
          "versions-list-item__current"}`}
      >
        v{version.toFixed(1)}
        {currentVersion && " (current)"}
      </li>
    );

    return versionLiJsx;
  };

  // map through each version, and create an li
  const getVersions = websiteVersionData.map((versionData, key) =>
    makeVersionsListItemJsx({
      key,
      versionData
    })
  );

  // Toggle between views
  const archiveDisplayJsx = archiveDisplayMode ? (
    <Display
      toggleArchiveDisplayMode={toggleArchiveDisplayMode}
      selectedArchiveData={selectedArchive}
    />
  ) : (
    <div className="archive-list-container">
      <div>
        <h3>
          Select a version. <br />
          See what this site looked like before!
        </h3>
      </div>
      <ul>{getVersions}</ul>
    </div>
  );

  const archivesJsx = (
    <div id="archives">
      <h1>Aloha!</h1>
      <h3>
        <br />
      </h3>
      {archiveDisplayJsx}
      <br />
    </div>
  );

  return archivesJsx;
};

export default Archives;
