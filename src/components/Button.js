export function Button({ children, handleFunction }) {
  return (
    <button className="btn" onClick={handleFunction}>
      {children}
    </button>
  );
}
