import React, { Component } from 'react';

class Connect extends Component {
  constructor() {
    super();
    this.state = {
      interwebs: [
        {
          name: `LinkedIn's Like... Really "In" now.`,
          link: 'https://www.linkedin.com/in/alexanderschelchere/'
        },
        {
          name: 'Gotta Commit. Onwards to GitHub!',
          link: 'https://github.com/Lexscher'
        },
        {
          name: 'That one time I wrote something on Medium.',
          link: 'https://medium.com/@lexscher'
        },
        {
          name: 'Tag me on Instagram!',
          link: 'https://instagram.com/arexamder'
        },
        {
          name: '@ me on Twitter!',
          link: 'https://twitter.com/arexamder'
        },
        {
          name: 'My Résumé.',
          link:
            'https://drive.google.com/open?id=1MtHKnRh6u_jSDg3BXO9mrddnwJ-5z00M'
        }
      ],
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    let socials = this.state.interwebs.map((link, index) => (
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
        key={index}
      >
        <h3>{link.name}</h3>
      </a>
    ));
    return (
      <div className="connect">
        <h1>Glad you were intrested enough to connect with me!</h1>
        <h2>
          <u>Find me on the internet.</u>
        </h2>
        <div className="social-media">{socials}</div>
      </div>
    );
  }
}

export default Connect;