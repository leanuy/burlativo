import React from 'react';
import './TextInput.css'

const textInput = (props) => {
    return (
        <div className="inputBox">
            <h2>Ingrese el texto...</h2>
            <textarea rows="10" cols="50" value={props.input} onChange={props.changed}
                placeholder="Ingrese el texto a burlarse" />
        </div>
    );
};

export default textInput;
