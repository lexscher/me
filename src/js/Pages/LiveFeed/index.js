import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import Project from "../../Components/Contribution";

const LiveFeed = () => {
  // My Github Url
  const sortedReposUrl =
    "https://api.github.com/users/lexscher/repos?sort=updated&per_page=5";

  const [gitHubRepos, setGithubRepos] = useState([]);

  const [reposLoaded, toggleReposLoaded] = useState(false);

  const [socketUrl, setSocketUrl] = useState("wss://echo.websocket.org");

  const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket(
    socketUrl
  );

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl("wss://demos.kaazing.com/echo"),
    []
  );
  const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);

  useEffect(() => {
    if (lastMessage !== null) {
      //getWebSocket returns the WebSocket wrapped in a Proxy. This is to restrict actions like mutating a shared websocket, overwriting handlers, etc
      const currentWebsocketUrl = getWebSocket().url;
      console.log("received a message from ", currentWebsocketUrl);

      setMessageHistory(prev => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed"
  }[readyState];

  const fetchRepos = () => {
    fetch(sortedReposUrl, {
      headers: {
        Accept: "application/vnd.github.v3.raw+json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setGithubRepos([...data]);
        toggleReposLoaded(true);
      })
      .catch(err => {
        console.error(err);
        return;
      });
  };
  const updateRepos = () => console.log("Updated Repos!");
  // const updateRepos = () => useEffect(() => fetchRepos(), [sortedRepos]);

  const singleProject = gitHubRepos.slice(0, 2).map(repo => {
    let {
      id,
      name,
      description,
      language,
      clone_url,
      homepage,
      created_at,
      updated_at
    } = repo;

    return (
      <Project
        key={id}
        name={name}
        description={description}
        language={language}
        url={clone_url}
        homepage={homepage}
        created={created_at.split("Z")[0]}
        updated={updated_at}
      />
    );
  });

  const liveFeedJsx = (
    <div id="live-feed">
      <div className="contribution-card__helper"></div>
      <div className="contribution-card__helper"></div>
      <div className="contribution-card__helper"></div>
      <div className="contribution-card">
        <code>Alex just ACTION to REPOSITORY LONG NAME</code>
      </div>
    </div>
  );

  return liveFeedJsx;
};

export default LiveFeed;
