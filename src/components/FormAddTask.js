import { useState } from "react";
import { Button } from "./Button";

export function FormAddTask({ onAddTask }) {
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [minutesOrHours, setMinutesOrHours] = useState("minutes");

  function handleSubmit(event) {
    event.preventDefault();

    if (!description || !duration) return;

    // create new task item
    const newTaskItem = {
      id: Date.now(),
      description,
      duration,
      minutesOrHours,
      completed: false,
    };

    onAddTask(newTaskItem);

    // reset states back to initial states
    setDescription("");
    setDuration("");
    setMinutesOrHours("minutes");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="form-container">
        <label>Task</label>
        <input
          id="task-input"
          type="text"
          placeholder="Enter a task ..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>How long do you anticipate you will spend on this task? </label>
        <input
          id="task-duration-input"
          type="text"
          placeholder="Enter a number ..."
          value={duration}
          onChange={(event) => setDuration(Number(event.target.value))}
        />
        <select
          id="select-mins-or-hours"
          value={minutesOrHours}
          onChange={(event) => setMinutesOrHours(event.target.value)}
        >
          <option value="minutes">(Minute / Minutes)</option>
          <option value="hours">(Hour / Hours)</option>
        </select>
        <span id="add-btn">
          <Button>Add Task</Button>
        </span>
      </div>
    </form>
  );
}
