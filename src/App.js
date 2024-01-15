import { useState } from "react";

const dailyTasks = [
  {
    id: 11223344,
    description: "Solve 2 LeetCode Problems",
    duration: 2,
    minutesOrHours: "hours",
    completed: false,
  },
  {
    id: 222334455,
    description: "Code With React",
    duration: 1,
    minutesOrHours: "hours",
    completed: false,
  },
  {
    id: 33445566,
    description: "Study for AWS Cloud Practitioner Certificate",
    duration: 2,
    minutesOrHours: "hours",
    completed: false,
  },
  {
    id: 44556677,
    description: "Go To The Gym",
    duration: 1,
    minutesOrHours: "hours",
    completed: false,
  },
  {
    id: 5,
    description: "Read",
    duration: 30,
    minutesOrHours: "minutes",
    completed: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(dailyTasks);

  function handleAddTask(task) {
    // Cannot mutate state - so create a brand new array
    // Add all items in the original with the spread operator and add the new task
    setTasks((task) => [...tasks, task]);
  }

  function handleCompletedTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id) {
    // setTasks -> go through every value in the arr
    // if it is true -> keep
    // otherwise false -> get rid of
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleClearTask() {
    setTasks([]);
  }

  return (
    <div className="app">
      <Logo />
      <Tracker tasks={tasks} />
      <FormAddTask onAddTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleCompletedTask}
        onClearTask={handleClearTask}
      />
    </div>
  );
}

function Logo() {
  return <h1 id="logo">Daily Task Tracker</h1>;
}

function Tracker({ tasks }) {
  if (tasks.length === 0) return;
  <p className="tracker">
    Start adding some tasks you need to complete today!
  </p>;

  const numOfTasks = tasks.length;
  const numOfTasksCompleted = tasks.filter((task) => task.completed).length;
  const percentOfTasksCompleted = Math.round(
    (numOfTasksCompleted / numOfTasks) * 100
  );

  if (percentOfTasksCompleted === 100)
    return (
      <p className="tracker success">
        Congratulations! You Finished All of Your Tasks For The Day 😎
      </p>
    );

  return (
    <p className="tracker in-progess">
      You Are {percentOfTasksCompleted}% Done With Your Tasks Today, Keep Going!
    </p>
  );
}

function TasksList({ tasks, onDeleteTask, onToggleTask, onClearTask }) {
  return (
    <div className="task-list">
      <h2>{tasks.length === 0 ? "No Current Task" : "Current Task"}</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
      <Button handleFunction={() => onClearTask()}>Clear</Button>
    </div>
  );
}

function Task({ task, onToggleTask, onDeleteTask }) {
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

function FormAddTask({ onAddTask }) {
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [minutesOrHours, setMinutesOrHours] = useState("minutes");

  function handleSubmit(event) {
    event.preventDefault();

    if (!description || !duration) return;

    // create new task

    const newTask = {
      id: crypto.randomUUID(),
      description: description,
      duration: duration,
      minutesOrHours: minutesOrHours,
      completed: false,
    };
    console.log(newTask);

    // add new task
    onAddTask(newTask);

    // reset states back to initial states
    setDescription("");
    setDuration("");
    setMinutesOrHours("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
          onChange={(event) => setDuration(event.target.value)}
        />
        <select
          id="select-mins-or-hours"
          value={minutesOrHours}
          onChange={(event) => setMinutesOrHours(event.target.value)}
        >
          <option value="minutes">(Minute / Minutes)</option>
          <option value="hours">(Hour / Hours)</option>
        </select>
      </div>
      <Button>Add</Button>
    </form>
  );
}

function Button({ children, handleFunction }) {
  return (
    <button className="btn" onClick={handleFunction}>
      {children}
    </button>
  );
}
