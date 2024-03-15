import React from 'react';
import "./styles/form_button.css"
const FormButton = ({txt}) => {
    return(
        <div className="form_button">
            <button type="button" class="btn btn-primary btn-sm">Small button</button>
        </div>
    )
}