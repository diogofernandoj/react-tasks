import { useState } from "react";

import "./styles/AddTasks.css";

export default function AddTasks({ addNewTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.target.parentElement.className = "add-tasks-container";
    setInputValue(e.target.value);
  };
  const handleButtonClick = (e) => {
    if (inputValue.trim() === "") {
      e.target.parentElement.classList.add("error");
    } else {
      addNewTask(inputValue);
    }
    setInputValue("");
  };
  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      handleButtonClick(e);
    }
  };
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="add-tasks-container">
        <input
          type="text"
          placeholder="New Task"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleInputEnter}
        />
        <button type="button" onClick={handleButtonClick}>
          Add
        </button>
      </div>
      <span>Invalid task!</span>
    </div>
  );
}
