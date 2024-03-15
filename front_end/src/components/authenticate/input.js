import React from 'react';
import "./styles/input.css"
const Input = ({type, txt}) => {
    return(
        <div>
            <input type={type} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={txt}/>
            </div>
    )
}

export default Input;