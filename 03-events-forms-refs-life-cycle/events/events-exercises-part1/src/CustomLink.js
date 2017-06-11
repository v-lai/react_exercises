import React, { Component } from 'react';

export default class CustomLink extends Component {
  render() {
    return (
      <div className="custom-link">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.text}</a>
      </div>
    );
  }
}
