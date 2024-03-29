export function Button({ children, handleFunction }) {
  // ButtonTwo - used for clear and add
  return (
    <button className="btn-two" onClick={handleFunction}>
      {children}
    </button>
  );
}
