import React from 'react';
import "./styles/input.css"
const Input = ({type, txt, name, value, onChange}) => {
    return(
        <div>
            <input name={name} value={value} onChange={onChange} type={type} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={txt}/>
            </div>
    )
}

export default Input;