import React from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import FormButton from './form_button.js'
import Input from './input.js'

function FormSignIn() {
    return(
        <div className="form_container">
            <form className="form">
                <h3>Sign In</h3>
                <Input type="email" txt="mail"/>
                <Input type="password" txt="password"/>
                <button type="button" class="btn btn-secondary btn-sm">sign in</button>
                <h6 className='dont_have_an_acc'>Don't have an account?</h6>

            </form>

        </div>
    )
}

export {FormSignIn}