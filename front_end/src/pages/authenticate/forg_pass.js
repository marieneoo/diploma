import React from 'react';
import './authenticate.css'
import {FormForgPass} from '../../components/authenticate/authenticate.js'
import AuthenticatePic from '../../components/authenticate/pic.js';
export default function ForgPass() {
    return(
        <div className="authenticate">
            <FormForgPass/>
            <AuthenticatePic/>
        </div>
    )
}