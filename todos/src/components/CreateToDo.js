import React from "react";

class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    // Boolean instead of text
    this.state = { value: "", complete: Boolean(false), index: Number };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var taskList = JSON.parse(sessionStorage.getItem("task"));

    var task = {
      label: this.state.value,
      complete: this.state.complete,
      index: 0,
    };

    if (taskList != null) {
      const labelCheck = taskList.some((i) => i.label === this.state.value);
      if (labelCheck === true) {
        event.preventDefault();
        alert("A task with same label exists.");
        return;
      }
      task.index = taskList.length;
      taskList.push(task);
      sessionStorage.setItem("task", JSON.stringify(taskList));
      console.log(labelCheck, task.label);
    } else {
      taskList = [];
      taskList.push(task);
      sessionStorage.setItem("task", JSON.stringify(taskList));
    }
    // sessionStorage.setItem("task", JSON.stringify([this.state.value]));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Add your task</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateToDo;
