import { TaskItemButton } from "./TaskItemButton";

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

      <TaskItemButton handleFunction={() => onDeleteTask(task.id)}>
        ❌
      </TaskItemButton>
    </li>
  );
}
