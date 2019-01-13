import React from 'react';
import './TextOutput.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const textOuput = (props) => {
    return (
        <div className="outputBox">
            <h2 className="titulo-salida">:::Burlese:::</h2>
            <textarea rows="30" cols="50" value={props.salida} onChange={props.changed} />
            <CopyToClipboard onCopy={props.copiado} text={props.salida}>
                <button className="copy-button">Copiar</button>
            </CopyToClipboard>
        </div>
    );
};

export default textOuput;
