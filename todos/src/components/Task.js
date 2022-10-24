import React, { useEffect } from "react";

function Task(props) {
  // const [complete, setComplete] = useState(props.complete);
  var taskList = JSON.parse(sessionStorage.getItem("task"));
  //change cliecked task object

  const toggleTask = () => {
    //get clicked task name
    const clickedTask = taskList.find(
      ({ index, label }) => label === props.label
    );
    var task = {
      label: props.label,
      complete: !clickedTask.complete,
      index: clickedTask.index,
    };
    taskList.splice(clickedTask.index, 1, task);
    sessionStorage.setItem("task", JSON.stringify(taskList));

    console.log(clickedTask.index);
  };

  const handleClick = (event) => {
    toggleTask();
    window.location.reload();
  };

  useEffect(() => {
    console.log();
  });

  return (
    <div className="task" onClick={handleClick} key={props.index}>
      <div className={"checkbox " + String(props.complete)}></div>
      <div className="task-name">{props.label}</div>
    </div>
  );
}

export default Task;
