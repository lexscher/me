import React, { Component } from "react";
// import Particles from "react-particles-js";
// import Party from "../Party";

class Connect extends Component {
  constructor() {
    super();
    this.state = {
      interwebs: [
        {
          name: `LinkedIn's Like... Really "In" now.`,
          link: "https://www.linkedin.com/in/alexanderschelchere/"
        },
        {
          name: "Gotta Commit. Onwards to GitHub!",
          link: "https://github.com/Lexscher"
        },
        {
          name: "That one time I wrote something on Medium.",
          link: "https://medium.com/@ascellie"
        },
        {
          name: "@ me on Twitter!",
          link: "https://twitter.com/Lexscher"
        },
        {
          name: "My Résumé.",
          link:
            "https://drive.google.com/open?id=16fGCDC3jH5FJ7fyre-O0NQOb69qHyJYm"
        }
      ],
      name: "",
      email: "",
      message: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

  }

  handleNameChange(event) {
    console.log(event.target.value);
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    console.log(event.target.value);
    this.setState({message: event.target.value});
  }

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
        <div className="social-media">
          {socials}
          <h3 id="contact-me" className="about-link">
            You can email me, too!
          </h3>
        </div>
        <div className="form-container">
          <form
            action="mailto:ascellie@gmail.com"
            method="post"
            enctype="text/plain"
          >
          
            <input className="form-info" type="text" name="name" placeholder="Name" value={this.state.value} onChange={this.handleNameChange} />
            <input className="form-info" type="text" name="mail" placeholder="E-Mail" value={this.state.value} onChange={this.handleEmailChange} />
            <textarea className="form-message" name="comment" rows="7" cols="48" placeholder="Write your message here..." value={this.state.value} onChange={this.handleMessageChange} />
            <input className="form-button" type="submit" value="submit" />
            
          </form>
        </div>
      </div>
    );
  }
}

export default Connect;
