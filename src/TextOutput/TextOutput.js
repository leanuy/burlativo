import React from 'react';
import './TextOutput.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const textOuput = (props) => {
    return (
        <div className="outputBox">
            <h2>:::Búrlese:::</h2>
            <textarea rows="10" cols="50" value={props.salida} onChange={props.changed} />
            <CopyToClipboard onCopy={props.copiado} text={props.salida}>
                <button className="copy-button"><strong>Copiar</strong></button>
            </CopyToClipboard>
        </div>
    );
};

export default textOuput;
