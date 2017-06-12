import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
	render() {
		return (
			<div className={this.props.check}>
				<p className="todo">
					<strong>{this.props.title}</strong>&nbsp;
					<span>{this.props.description}</span>&nbsp;
					<button className="complete" onClick={this.props.checked}>√</button>
					<button className="remove" onClick={this.props.removed}>X</button>
				</p>
			</div>
		);
	}
}