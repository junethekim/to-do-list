import React from "react";
import "./App.css";
// import ToDoField from "./components/ToDoField.js";

function App() {
  class ToDoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      alert("A name was submitted: " + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Add your task
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  // Show To Do List
  function ToDoList(props) {
    const todos = [
      { id: 1, complete: true, value: "cleaning" },
      { id: 2, complete: false, value: "work" },
    ];

    // To Do Item
    const todolist = todos.map((todo) => (
      <li key={todo.id}>
        {todo.value}, {todo.complete.toString()}
      </li>
    ));
    return (
      <div>
        <ul>{todolist}</ul>
      </div>
    );
  }

  return (
    <div className="App">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
