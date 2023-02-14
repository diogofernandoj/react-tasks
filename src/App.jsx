import { useState } from "react";

import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

import "./App.css";

function App() {
  const [taskId, setTaskId] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addNewTask = (inputValue) => {
    const newTasks = [...tasks, { id: taskId, name: inputValue, isCompleted: false }];

    setTasks(newTasks);
    setTaskId(taskId + 1);
  };

  const completeTask = (taskIndex) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskIndex) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="tasks-container">
      <h2 style={{ marginBottom: "1.5rem" }}>My tasks</h2>
      <AddTasks addNewTask={addNewTask} />
      <Tasks tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
