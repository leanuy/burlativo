import './TextInput.css';

function TextInput({ value, onChange }) {
  return (
    <div className="inputBox">
      <h2>Ingrese el texto...</h2>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Ingrese el texto a burlarse"
      />
    </div>
  );
}

export default TextInput;
