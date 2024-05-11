import React from 'react';
import "./styles/input.css"
const Input = ({ type, txt, name, value, onChange }) => {
    return (
        <div>
            <input name={name} value={value} onChange={onChange} type={type} className="form-control"  aria-describedby="emailHelp" placeholder={txt} />
        </div>
    )
}

export default Input;