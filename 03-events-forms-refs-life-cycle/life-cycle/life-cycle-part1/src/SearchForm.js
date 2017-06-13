import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.search !== '') {
      this.props.addGif(this.state.search);
    }
    this.setState({
      search: ''
    });
  }

  render() {
    let searchForm = <form onSubmit={this.handleSubmit}>
      <label htmlFor="search">Search: </label>
      <input type="text"
        onChange={this.handleChange}
        placeholder="Search for a Giphy"
        name="search"
        value={this.state.search}
      />
      <input type="submit" className="submit" value="Submit" />
    </form>

    return (
      <div>
        {searchForm}
      </div>
    );
  }
}