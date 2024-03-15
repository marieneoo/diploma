import React from 'react';
import { NavLink } from "react-router-dom"
export default function BurgerBar() {
    return (
        <div className="burger_bar">
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