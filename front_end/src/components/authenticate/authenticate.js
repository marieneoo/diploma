import React from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import FormButton from './form_button.js'
import Input from './input.js'

function FormSignIn() {
    return(
        <div className='authenticate_container'>
            <div className="form_container_sign_in">
            <form className="form">
                <h3>Մուտք Գործել</h3>
                <Input type="email" txt="Էլ․հասցե"/>
                <Input type="password" txt="Գաղտնաբառ"/>
                <button type="submit" class="btn btn-secondary btn-sm">Մուտք Գործել</button>
                <NavLink to="/sign_up"><h6 className='form_navlinks'>Գրանցված չե՞ք</h6></NavLink>
                <NavLink to="/forgot_password"><h6 className='form_navlinks'>Մոռացե՞լ եք գաղտնաբառը</h6></NavLink>
            </form>
        </div>
        </div>
    )
}

function FormSignUp() {
    return(
        <div className='authenticate_container'>
            <div className="form_container_sign_up">
            <form className="form">
                <h3>Գրանցվել</h3>
                <Input type="text" txt="Անուն"/>
                <Input type="email" txt="Էլ․հասցե"/>
                <Input type="password" txt="Գաղտնաբառ"/>
                <Input type="password" txt="Կրկնել գաղտնաբառը"/>
                <button type="submit" class="btn btn-secondary btn-sm">Գրանցվել</button>
                <NavLink to="/sign_in"><h6 className='form_navlinks'>Ունե՞ք հաշիվ</h6></NavLink>  
            </form>
        </div>
        </div>
    )
}

function FormForgPass() {
    return(
        <div className='authenticate_container'>
            <div className="form_container_forg_pass">
            <form className="form">
                <h3>Մոռացե՞լ եք Ձեր գաղտնաբառը</h3>
                <Input type="email" txt="Էլ․հասցե"/>
                <NavLink to="/sign_in"><h6 className='form_navlinks'>Մուտք գործել</h6></NavLink> 
            </form>
        </div>
        </div>
    )
}


export {FormSignIn, FormSignUp, FormForgPass}