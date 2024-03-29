import { useState } from "react";

import { AppLayout } from "./AppLayout";
import { Logo } from "./Logo";
import { Tracker } from "./Tracker";
import { TasksList } from "./TasksList";
import { FormAddTask } from "./FormAddTask";

// TEST DATA
const dailyTasks = [
  {
    id: 11223344,
    description: "Solve 2 LeetCode Problems",
    duration: 45,
    minutesOrHours: "minutes",
    completed: false,
  },
  {
    id: 22334455,
    description: "Review Data Structures & Algorithms",
    duration: 1,
    minutesOrHours: "hour",
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
    description: "Study / Code with React",
    duration: 1,
    minutesOrHours: "hour",
    completed: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(dailyTasks);

  function handleAddTask(task) {
    // Cannot mutate state - so create a brand new array
    // Add all items in the original with the spread operator and add the new task

    // *** HAD PREVIOUS BUG -> make sure to double check ***
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    // setTasks -> go through every value in the arr
    // if it is true -> keep
    // otherwise false -> get rid of
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCompletedTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleClearTask() {
    setTasks([]);
  }

  return (
    <div className="app-container">
      <AppLayout>
        <Logo />
        <Tracker tasks={tasks} />
        <FormAddTask onAddTask={handleAddTask} />
        <TasksList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleCompletedTask}
          onClearTask={handleClearTask}
        />
      </AppLayout>
    </div>
  );
}
