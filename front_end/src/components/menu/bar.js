import React from 'react';
import { NavLink } from "react-router-dom"
import lotus from "../../assets/images/lotus_logo.svg"
export default function Bar() {
    return(
        <div className="bar">
            <NavLink to="/home"><img className="lotus" src={lotus}></img></NavLink>
            <ul>
                <li><NavLink to="/home">ԳԼԽԱՎՈՐ</NavLink></li>
                <li><NavLink to="/about">ՄԵՐ ՄԱՍԻՆ</NavLink></li>
                <li><NavLink to="/classes">ԴԱՍԵՐ</NavLink></li>
                <li><NavLink to="/contact">ԿԱՊ</NavLink></li>
                <li><NavLink to="/spa">ՍՊԱ</NavLink></li>
            </ul>
        
        </div>
    )
}