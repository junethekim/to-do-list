import React, { useEffect } from "react";

function Task {
  const handleClick() => {
    var taskList = JSON.parse(sessionStorage.getItem("task"));

    //get clicked task name
    const clickedTask = taskList.find(
      ({ label }) => label === this.props.label
    );
    //change cliecked task object
    this.setState({ complete: !this.props.complete });

    console.log(!this.props.complete, this.props.label, clickedTask.label);
  }

  return (
    <div className="task" onClick={this.handleClick} key={this.props.id}>
      <div className={"checkbox " + String(this.props.complete)}></div>
      <div className="task-name">{this.props.label}</div>
      is {String(this.props.complete)}
    </div>
  );
}

export default Task;
