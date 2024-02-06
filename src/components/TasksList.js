import { Button } from "./Button";
import { Task } from "./Task";

export function TasksList({ tasks, onDeleteTask, onToggleTask, onClearTask }) {
  return (
    <div className="task-container">
      <h2>{tasks.length === 0 ? "No Current Task" : "Current Task"}</h2>
      {tasks.length === 0 ? (
        ""
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask}
            />
          ))}
        </ul>
      )}
      {tasks.length === 0 ? (
        ""
      ) : (
        <div id="clear-btn">
          <Button handleFunction={() => onClearTask()}>Clear</Button>
        </div>
      )}
    </div>
  );
}
