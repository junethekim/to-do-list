import React, { useState } from "react";
import "./main.css";
import CreateToDo from "./components/CreateToDo.js";
import Task from "./components/Task.js";

function App() {
  //To do list
  //투두리스트 보여주기
  function ToDoList() {
    var tasks = JSON.parse(sessionStorage.getItem("task"));

    if (sessionStorage.getItem("task") != null) {
      //get Tasks to complete
      const tasksToComplete = tasks.filter(
        ({ complete }) => complete === false
      );
      //display tasks to complete
      const taskListToComplete = tasksToComplete.map((task, id) => (
        <Task label={task.label} complete={task.complete} key={id} />
      ));

      //get complete tasks
      const completedTasks = tasks.filter(({ complete }) => complete === true);
      //display complete tasks
      const completedTaskList = completedTasks.map((task, id) => (
        <Task label={task.label} complete={task.complete} key={id} />
      ));
      return (
        <div className="tasklist">
          <h2>Tasks to complete</h2>
          {taskListToComplete}
          <h2>Completed</h2>
          {completedTaskList}
        </div>
      );
    } else {
      return (
        <div>
          <h2>No tasks found.</h2>
        </div>
      );
    }
  }

  //Complete task
  return (
    <div className="App">
      <div className="container">
        <CreateToDo />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
