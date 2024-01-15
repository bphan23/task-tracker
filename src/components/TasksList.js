import { ButtonTwo } from "./ButtonTwo";
import { Task } from "./Task";

export function TasksList({ tasks, onDeleteTask, onToggleTask, onClearTask }) {
  return (
    <div className="task-container">
      <h2>{tasks.length === 0 ? "No Current Task" : "Current Task"}</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
      <div id="clear-btn">
        <ButtonTwo handleFunction={() => onClearTask()}>Clear</ButtonTwo>
      </div>
    </div>
  );
}
