import './TextOutput.css';

function TextOutput({ value, onCopy, copied }) {
  return (
    <div className="outputBox">
      <h2>:::Búrlese:::</h2>
      <textarea value={value} readOnly />
      <button className={`copy-button${copied ? ' copied' : ''}`} onClick={onCopy}>
        {copied ? '¡Copiado!' : 'Copiar'}
      </button>
    </div>
  );
}

export default TextOutput;
