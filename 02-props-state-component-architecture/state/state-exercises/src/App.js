import React, { Component } from 'react';
import Squares from './Squares';

class App extends Component {
  constructor(props) {
    super(props);

    const SQUARES = 24;
    const squares = new Array(SQUARES);

    for (let i = 0; i < SQUARES; i++) {
      // initializing squares in array as with an id and color
      squares[i] = {
        id: i,
        color: randomColor()
      }
    }

    this.state = { squares }; // set squares as state -> they change

    setInterval(() => {
      // creating a new array with existing values (not mutating existing array)
      const newSquares = this.state.squares.slice();
      // choosing a random square
      const randSqIdx = Math.floor(Math.random() * SQUARES);
      // changing the color of one square
      newSquares[randSqIdx].color = randomColor();
      // setting state for the whole array of squares
      this.setState({
        squares: newSquares
      });
    }, 300);
  }

  render() {
    const squares = this.state.squares.map(s =>
      <Squares key={s.id} color={s.color} />
    );

    return (
      <div className="App">
        <h1>Color blocks!</h1>
        <div className="container">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;

function randomColor() {
  // "r" from 0 - 255
  const r = Math.floor(Math.random() * 255);
  // "g" from 0 - 255
  const g = Math.floor(Math.random() * 255);
  // "b" from 0 - 255
  const b = Math.floor(Math.random() * 255);
  //"rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}