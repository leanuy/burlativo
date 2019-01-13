import React from 'react';
import './TextOutput.css'

const textOuput = (props) => {
    return (
        <div className="outputBox">
            <textarea rows="4" cols="50" value={props.salida} onChange={props.changed}>
                
            </textarea>
        </div>
    );
};

export default textOuput;
