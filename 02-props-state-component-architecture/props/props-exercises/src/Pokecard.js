import React, { Component } from 'react';

export default class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} />
        <p>Type: {this.props.type}</p>
      </div>
    );
  }
}