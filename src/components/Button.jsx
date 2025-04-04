function Button({ label = "click Here", onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
