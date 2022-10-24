import React from "react";
import "./main.css";
import CreateToDo from "./components/CreateToDo.js";
import Task from "./components/Task.js";

function App() {
  //To do list
  //투두리스트 보여주기
  function ToDoList() {
    var tasks = JSON.parse(sessionStorage.getItem("task"));

    if (sessionStorage.getItem("task") != null) {
      const display = tasks.map((task, id) => (
        <Task label={task.label} complete={task.complete} key={id} />
      ));
      return (
        <div className="tasklist">
          <h2>Tasks</h2>
          {display}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Tasks</h2>
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
