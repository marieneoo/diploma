import React, { forwardRef } from 'react';
import "./styles/input.css";

const Input = forwardRef(({ type, txt, name, value, onChange }, ref) => {
    return (
        <div>
            <input
                name={name}
                value={value}
                ref={ref}
                onChange={onChange}
                type={type}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder={txt}
            />
        </div>
    );
});

export default Input;
