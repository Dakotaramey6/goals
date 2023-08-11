function Button({ children, onClick }) {
  return (
    <div className="btn">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
