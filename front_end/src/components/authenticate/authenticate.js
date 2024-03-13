import { NavLink, useNavigate } from "react-router-dom"
import FormButton from './form_button.js'
import Input from './input.js'

function FormLogIn() {
    return(
        <div className="form_container">
            <form className="form">
                <h3>Sign Up</h3>
                <button type="button" class="btn btn-success">Success</button>
                <Input/>
            </form>

        </div>
    )
}

export {FormLogIn}