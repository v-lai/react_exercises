import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          title: "homework",
          description: "work work work",
          check: "off"
        },
        {
          title: "eating habits",
          description: "eat healthy",
          check: "off"
        },
        {
          title: "sleeping habits",
          description: "get enough sleep",
          check: "off"
        },
        {
          title: "health",
          description: "go for a run",
          check: "off"
        },
        {
          title: "car stuff",
          description: "get oil changed",
          check: "off"
        }
      ]
    }
  }

  handleCheck(idx) {
    let { todos } = this.state;
    let newTodos = todos.slice();
    newTodos[idx].check = newTodos[idx].check === "off" ? "on" : "off";
    this.setState({
      todos: newTodos
    });
  }

  handleRemove(idx) {
    let { todos } = this.state;
    let newTodos = todos.slice(0, idx).concat(todos.slice(idx + 1));
    this.setState({
      todos: newTodos
    });
  }

  render() {
    const list = this.state.todos.map((i, idx) => 
      <Todo
        key={idx}
        title={i.title}
        description={i.description}
        check={i.check}
        checked={this.handleCheck.bind(this, idx)}
        removed={this.handleRemove.bind(this, idx)}
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
