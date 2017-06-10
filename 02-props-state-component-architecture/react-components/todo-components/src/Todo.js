import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
	render() {
		return (
			<div className="todo {this.props.key}">
				<p><input id="checkbox" type="checkbox" value={this.props.checked}/> {this.props.description}</p>
			</div>
		);
	}
}