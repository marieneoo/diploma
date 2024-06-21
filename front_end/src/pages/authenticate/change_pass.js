import { FormChangePass } from '../../components/authenticate/authenticate.js';
import React from 'react';
import './authenticate.css'
import AuthenticatePic from '../../components/authenticate/pic.js';
export default function ChangePass() {
    return(
        <div className="authenticate">
            <FormChangePass/>
            <AuthenticatePic/>
        </div>
    )
}