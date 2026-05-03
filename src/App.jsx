import { useState } from 'react';
import './App.css';
import TextInput from './TextInput/TextInput';
import TextOutput from './TextOutput/TextOutput';

const toBurlativo = (text) =>
  text.replace(/[aeiou]/g, 'i').replace(/[AEIOU]/g, 'I');

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setOutput(toBurlativo(value));
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {
      const el = document.createElement('textarea');
      el.value = output;
      el.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Traductor a Burlativo</h1>
        <p>Convertí tu texto al idioma de la burla — todas las vocales se vuelven i.</p>
      </header>
      <article className="main-content">
        <TextInput value={input} onChange={handleInputChange} />
        <TextOutput value={output} onCopy={handleCopy} copied={copied} />
      </article>
      <footer className="footer">
        <p>
          Powered by{' '}
          <a href="https://github.com/leanuy">Lenny</a>{' '}
          &#x1F49A;
        </p>
      </footer>
    </div>
  );
}

export default App;
