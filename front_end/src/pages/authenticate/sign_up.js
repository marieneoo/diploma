import React from 'react';
import './authenticate.css'
import { FormSignUp } from '../../components/authenticate/authenticate.js';
import AuthenticatePic from '../../components/authenticate/pic.js';
export default function SignUp() {
    return (
        <div className="authenticate">
            <FormSignUp />
            <AuthenticatePic />
        </div>
    )
}