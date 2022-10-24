import React from "react";

class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    // Boolean instead of text
    this.state = { value: "", complete: Boolean(false), id: Number };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);

    var task = {
      label: this.state.value,
      complete: this.state.complete,
      id: this.props.id,
    };
    if (sessionStorage.getItem("task") != null) {
      var taskList = JSON.parse(sessionStorage.getItem("task"));
      taskList.push(task);
      sessionStorage.setItem("task", JSON.stringify(taskList));
    } else {
      sessionStorage.setItem("task", JSON.stringify([task]));
    }
    // event.preventDefault();

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
