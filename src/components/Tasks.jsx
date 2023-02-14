import "./styles/Tasks.css";

export default function Tasks({ tasks, completeTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <div className="task-container" key={task.id}>
          <p
            onClick={() => completeTask(task.id)}
            style={task.isCompleted ? { borderLeft: "4px solid #00d4ff", textDecoration: "line-through" } : {}}
          >
            {task.name}
          </p>
          <i className="fa-solid fa-xmark" onClick={() => deleteTask(task.id)}></i>
        </div>
      ))}
    </div>
  );
}
