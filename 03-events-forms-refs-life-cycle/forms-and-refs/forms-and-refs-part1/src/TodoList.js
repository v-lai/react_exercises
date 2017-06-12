import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

export default class TodoList extends Component {

  handleCheck(idx) {
    let newTodos = this.props.todos.slice();
    newTodos[idx].check = newTodos[idx].check === false ? true : false;
    this.setState({
      todos: newTodos
    });
  }

  handleRemoveItem(idx) {
    this.props.removeTodo(idx);
  }

  render() {
    const list = this.props.todos.map((i, idx) =>
      <Todo
        key={idx}
        title={i.title}
        description={i.description}
        check={i.check}
        checked={this.handleCheck.bind(this, idx)}
        removed={this.handleRemoveItem.bind(this, idx)}
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
