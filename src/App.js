import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput/TextInput';
import TextOutput from './TextOutput/TextOutput';

class App extends Component {
  state = {
    inputText: '',
    outputText: ''
  }

  updateOutputHandler = (event) => {
    let newOuput = event.target.value;
    let salida = newOuput.replace(/a/g, 'i').replace(/e/g, 'i').replace(/o/g, 'i').replace(/u/g, 'i')
      .replace(/A/g, 'I').replace(/E/g, 'I').replace(/O/g, 'I').replace(/U/g, 'I');
    this.setState({outputText: salida});
  }

  onCopyHandler = () => {
    alert("Texto Copiado");
  };

  render() {
    return (
      <div className="container">
          <header className="header">
            <h1>Traductor a Burlativo</h1>
          </header>
          <article className="main-content">
            <TextInput changed={this.updateOutputHandler} />
            <TextOutput salida={this.state.outputText} copiado={this.onCopyHandler}/>
          </article>
          <footer className="footer">
            <h5>Powered by <a href="http://github.com/leanuy"><strong>Lenny</strong></a> &#x1F49A;</h5>
          </footer>  
      </div>
    );
  }
}

export default App;
