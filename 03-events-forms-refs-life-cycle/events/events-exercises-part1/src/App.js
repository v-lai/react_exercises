import React, { Component } from 'react';
import CustomLink from './CustomLink';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { clickEvent: "enabled" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.state.clickEvent === "enabled" ? 
    this.setState({ clickEvent: "disabled" }) : 
    this.setState({ clickEvent: "enabled" });
  }

  render() {
    const links = this.props.links.map(l =>
      <CustomLink
        key={l.id}
        href={l.href}
        text={l.text}
      />
    );
    return (
      <div className="App">
        <h1>Links</h1>
        <div className={this.state.clickEvent}>
          {links}
        </div>
        <p></p>
        <button onClick={this.handleClick}>Enable/Disable All Links</button>
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      id: 1,
      href: "https://github.com",
      text: "Github",
      pointerEvents: "enabled"
    },
    {
      id: 2,
      href: "https://google.com",
      text: "Google",
      pointerEvents: "enabled"
    },
    {
      id: 3,
      href: "https://twitter.com",
      text: "Twitter",
      pointerEvents: "enabled"
    },
    {
      id: 4,
      href: "https://facebook.com",
      text: "Facebook",
      pointerEvents: "enabled"
    },
    {
      id: 5,
      href: "https://yahoo.com",
      text: "Yahoo",
      pointerEvents: "enabled"
    }
  ]
}