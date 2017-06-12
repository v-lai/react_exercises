import React, { Component } from 'react';
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [] // starting from an empty array
      // todos: [ // seeded data from before
      //   {
      //     title: "homework",
      //     description: "work work work",
      //     check: false
      //   },
      //   {
      //     title: "eating habits",
      //     description: "eat healthy",
      //     check: false
      //   },
      //   {
      //     title: "sleeping habits",
      //     description: "get enough sleep",
      //     check: false
      //   },
      //   {
      //     title: "health",
      //     description: "go for a run",
      //     check: false
      //   },
      //   {
      //     title: "car stuff",
      //     description: "get oil changed",
      //     check: false
      //   }
      // ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(title, description) {
    let newTodos = this.state.todos.slice();
    newTodos.push({
      title: title,
      description: description,
      check: false
    });
    this.setState({
      todos: newTodos
    });
  }

  removeTodo(idx) {
    let newTodos = this.state.todos.slice(0, idx).concat(this.state.todos.slice(idx + 1));
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
