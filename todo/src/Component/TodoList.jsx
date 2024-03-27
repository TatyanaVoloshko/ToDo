import React, { Component } from 'react'

export default class TodoList extends Component {
    state = {
        tasks: [],
        inputValue: '',
    }


  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  addTask = () => {
    if (this.state.inputValue.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.inputValue],
        inputValue: "",
      }));
    }
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };
}

