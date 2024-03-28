import React, { Component } from 'react'
import './TodoList.css'

export default class TodoList extends Component {
  state = {
    tasks: [],
    inputValue: "",
    textareaValue: "",
  };

  render() {
    return (
      <div className="Container">
        <h2>New Task:</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChangeInput}
        />
        <textarea
          value={this.state.textareaValue}
          onChange={this.handleChangeTextarea}
        ></textarea>
        <button onClick={this.addTask}>Add Task</button>
        <h1>My todo list:</h1>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <div>
                <strong>{task.title}</strong>: {task.description}
              </div>
              <button
                className="Remove-btn"
                onClick={(event) => {
                  this.removeTask(event, index);
                }}
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleChangeInput = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  handleChangeTextarea = (e) => {
    this.setState({ textareaValue: e.target.value });
  };

  addTask = () => {
    if (
      this.state.inputValue.trim() !== "" &&
      this.state.textareaValue.trim() !== ""
    ) {
      const newTask = {
        title: this.state.inputValue,
        description: this.state.textareaValue,
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        inputValue: "",
        textareaValue: "",
      }));
    }
  };

  removeTask = (event, index) => {
    event.preventDefault();
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };
}