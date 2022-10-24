import React, { useEffect } from "react";

class Task extends React.Component {
  //   task = { id: 0, label: "work", status: "complete" };
  constructor(props) {
    super(props);
    // this.state = { complete: Boolean };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var taskList = JSON.parse(sessionStorage.getItem("task"));

    //get clicked task name
    const clickedTask = taskList.find(
      ({ label }) => label === this.props.label
    );
    //change cliecked task object
    this.setState({ complete: !this.props.complete });

    console.log(!this.props.complete, this.props.label, clickedTask.label);
  }

  render() {
    return (
      <div className="task" onClick={this.handleClick} key={this.props.id}>
        <div className={"checkbox " + String(this.props.complete)}></div>
        <div className="task-name">{this.props.label}</div>
        is {String(this.props.complete)}
      </div>
    );
  }
}

export default Task;
