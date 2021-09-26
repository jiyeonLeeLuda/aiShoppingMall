export default function Button({
  label,
  name,
  value = name,
  onClick,
}) {
  const id = `button-${name}`;

  function handleClick(event) {
    const { target } = event;
    onClick({ value: target.value });
  }
  return (
    <button
      type="button"
      id={id}
      name={name}
      value={value}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
