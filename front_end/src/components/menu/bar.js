import React from 'react';
import { NavLink } from "react-router-dom"
import lotus from "../../assets/images/lotus_logo.svg"
export default function Bar() {
    return(
        <div className="bar">
            <NavLink to="/home"><img className="lotus" src={lotus}></img></NavLink>
            <ul>
                <li><NavLink to="/home">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/classes">CLASSES</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
                <li><NavLink to="/spa">SPA</NavLink></li>
            </ul>
        
        </div>
    )
}