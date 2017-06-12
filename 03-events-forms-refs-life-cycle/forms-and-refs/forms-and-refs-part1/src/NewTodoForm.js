import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      check: false
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
    if (this.state.title !== '' && this.state.description !== '') {
      this.props.addTodo(this.state.title, this.state.description);
    }
    e.target.reset();
  }

  render() {
    let newForm = <form onSubmit={this.handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input type="text"
        onChange={this.handleChange}
        placeholder="title"
        name="title"
        value={this.state.title}
      />
      <label htmlFor="description">Description: </label>
      <input type="text"
        onChange={this.handleChange}
        placeholder="description"
        name="description"
        value={this.state.description}
      />
      <input type="submit" value="Add" />
    </form>
    return (
      <div>
        <h3>Add a new todo: </h3>
        { newForm }
      </div>
    );
  }
}