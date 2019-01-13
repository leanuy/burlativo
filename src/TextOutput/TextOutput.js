import React from 'react';
import './TextOutput.css'

const copyToClipboard = () => {
    console.log("copiar");
};

const textOuput = (props) => {
    return (
        <div className="outputBox">
            <h2 className="titulo-salida">:::Burlese:::</h2>
            <textarea rows="4" cols="50" value={props.salida} onChange={props.changed} />
            <button className="copy-button" onClick={copyToClipboard}>Copiar</button>
        </div>
    );
};

export default textOuput;
