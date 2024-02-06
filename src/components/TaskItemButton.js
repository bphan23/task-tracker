export function TaskItemButton({ children, handleFunction }) {
  return (
    <button className="btn" onClick={handleFunction}>
      {children}
    </button>
  );
}
