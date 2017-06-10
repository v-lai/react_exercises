import React, { Component } from 'react';

export default class Squares extends Component {
  render() {
    return (
      <div className="square" style={{ backgroundColor: this.props.color }}></div>
    );
  }
}