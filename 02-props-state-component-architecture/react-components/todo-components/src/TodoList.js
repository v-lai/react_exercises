import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
  }

  // logic for handling checked boxes handled in events exercises

  render() {
    const list = this.props.todos.map((i,idx) =>
      <Todo
        key={idx}
        description={i}
        checked={this.state.checked}
      />
    );
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
          { list }
      </div>
    );
  }
}

TodoList.defaultProps = {
  todos: [
    "homework",
    "eat healthy",
    "get enough sleep",
    "go for a run",
    "get oil changed"
  ]
}

TodoList.propTypes = {
  description: PropTypes.string
}