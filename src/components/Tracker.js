export function Tracker({ tasks }) {
  if (tasks.length === 0)
    return (
      <p className={`tracker ${tasks.length === 0 ? "start" : ""}`}>
        Start Adding Some Tasks You Need To Complete Today! 😁
      </p>
    );

  const numOfTasks = tasks.length;
  const numOfTasksCompleted = tasks.filter((task) => task.completed).length;
  const percentOfTasksCompleted = Math.round(
    (numOfTasksCompleted / numOfTasks) * 100
  );

  if (percentOfTasksCompleted === 100)
    return (
      <p
        className={`tracker ${
          percentOfTasksCompleted === 100 ? "success" : ""
        }`}
      >
        Congratulations! You Finished All of Your Tasks For The Day 🥳
      </p>
    );

  return (
    <p className={`tracker ${true ? "in-progress" : ""}`}>
      You Are {percentOfTasksCompleted}% Done With Your Tasks Today, Keep It Up!
      😎
    </p>
  );
}
