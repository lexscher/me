import React, { Fragment, useState, useEffect } from 'react';
import Project from '../../Components/Project';

const Projects = () => {
  // Handle Repositories
  const [gitHubRepos, setgitHubRepos] = useState([]);
  const [reposLoaded, toggleReposLoaded] = useState(false);
  // Handle current page
  const [currentPage, setCurrentPage] = useState(0);
  const [max, setMax] = useState(3);
  // handle sort
  const [sortedRepos, changeSortedRepos] = useState('pushed');

  // Handle repo re-sort
  const handleReposReSort = sortedParamString => {
    switch (sortedParamString) {
      case 'full_name':
        changeSortedRepos('full_name');
        break;
      case 'created':
        changeSortedRepos('created');
        break;
      case 'updated':
        changeSortedRepos('updated');
        break;
      case 'pushed':
        changeSortedRepos('pushed');
        break;

      default:
        changeSortedRepos('pushed');
        break;
    }
    handlePageChange('first');
  };

  // Change page
  const handlePageChange = direction => {
    switch (direction) {
      case 'next':
        handleNextPage();
        return;
      case 'prev':
        handlePrevPage();
        return;
      case 'first':
        setCurrentPage(0);
        setMax(3);
        return;
      case 'last':
        setCurrentPage(32);
        setMax(99);
        return;
      default:
        return;
    }
  };
  // Next Page
  const handleNextPage = () => {
    // We only have ten pages
    if (currentPage == 33) return;
    setCurrentPage(currentPage + 1);
    setMax(max + 3);
    console.log('PAGE - ' + currentPage + 'MAX: ' + max);
  };
  // Previous Page
  const handlePrevPage = () => {
    // No 'Page Zero' or lower.
    if (currentPage == 0) return;
    setCurrentPage(currentPage - 1);
    setMax(max - 3);
    console.log(currentPage);
  };

  const fetchRepos = () => {
    toggleReposLoaded(false);
    fetch(
      `https://api.github.com/users/lexscher/repos?sort=${sortedRepos}&per_page=99&page=1`,
      {
        headers: {
          Accept: 'application/vnd.github.v3.raw+json'
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        setgitHubRepos([...data]);
        toggleReposLoaded(true);
      })
      .catch(err => {
        console.error(err);
        return;
      });
  };

  useEffect(() => fetchRepos(), [sortedRepos]);

  const projects = gitHubRepos.slice(max - 3, max).map(repo => {
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
        created={created_at.split('Z')[0]}
        updated={updated_at}
      />
    );
  });

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-sort-controller">
        <button onClick={() => handleReposReSort('full_name')}>
          <p>NAME</p>
        </button>
        <button onClick={() => handleReposReSort('created')}>
          <p>CREATED</p>
        </button>

        <button onClick={() => handleReposReSort('updated')}>
          <p>LAST UPDATED</p>
        </button>
        <button onClick={() => handleReposReSort('pushed')}>
          <p>LASTEST PUSH</p>
        </button>
      </div>
      <div className="projects-container">
        {reposLoaded ? projects : 'Loading Projects :D'}
      </div>
      <div className="project-page-turner">
        {currentPage == 0
          ? [
              <button disabled>
                <p>FIRST PAGE</p>
              </button>,
              <button disabled>
                <p>PREV</p>
              </button>
            ]
          : [
              <button onClick={() => handlePageChange('first')}>
                <p>FIRST PAGE</p>
              </button>,
              <button onClick={() => handlePageChange('prev')}>
                <p>PREV</p>
              </button>
            ]}
        <p>PAGE {currentPage + 1}/33</p>
        {currentPage == 32
          ? [
              <button disabled>
                <p>NEXT</p>
              </button>,
              <button disabled>
                <p>LAST PAGE</p>
              </button>
            ]
          : [
              <button onClick={() => handlePageChange('next')}>
                <p>NEXT</p>
              </button>,
              <button onClick={() => handlePageChange('last')}>
                <p>LAST PAGE</p>
              </button>
            ]}
      </div>
    </div>
  );
};

export default Projects;
