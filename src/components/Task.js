import { Button } from "./Button";

export function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        value={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description} - ({task.duration}{" "}
        {task.duration === 1 && task.minutesOrHours === "hours"
          ? "hour"
          : task.duration === 1 && task.minutesOrHours === "minutes"
          ? "minute"
          : task.minutesOrHours}
        )
      </span>

      <Button handleFunction={() => onDeleteTask(task.id)}>❌</Button>
    </li>
  );
}
