import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphys: []
    }
    this.addGif = this.addGif.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  componentWillMount() {
    const gifOfTheDay = ["kittens", "nyan cat", "pusheen", "garfield", "hello kitty"];
    this.addGif(gifOfTheDay[Math.floor(Math.random() * gifOfTheDay.length)]);
  }  

  addGif(searchTerm) {
    let newGiphys = this.state.giphys.slice();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(res => {
        let gifs = res.data.data;
        newGiphys.push({
          src: gifs[Math.floor(Math.random() * gifs.length)].images.downsized.url,
          alt: searchTerm
        });
        this.setState({
          giphys: newGiphys
        });
        return;
      })
      .catch((err) => console.log(err));
  }

  removeAll() {
    this.setState({
      giphys: []
    });
  }

  render() {
    let list = this.state.giphys.map((i, idx) => (
      <img
        key={idx}
        src={i.src}
        alt={i.alt}
      />
    ));
    return (
      <div className="App">
        <h1>Giphy Search</h1>
        <div className="search">
          <SearchForm addGif={this.addGif} />
          <button className="remove" onClick={this.removeAll}>Remove Images</button>
        </div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}