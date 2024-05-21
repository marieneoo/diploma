import React from 'react';
import './authenticate.css'
import {FormSignIn} from '../../components/authenticate/authenticate.js'
import AuthenticatePic from '../../components/authenticate/pic.js';
export default function SignIn() {
    return(
        <div className="authenticate">
            <FormSignIn/>
            <AuthenticatePic/>
        </div>
    )
}