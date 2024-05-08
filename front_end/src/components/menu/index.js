import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import "./styles/menu.css"
import instagram from "../../assets/images/main/instagram.svg"
import facebook from "../../assets/images/main/facebook.svg"
import lotus from "../../assets/images/main/lotus_logo.svg"
import burger from "../../assets/images/main/burger.svg"
import Button from "../button/button.js"


export default function Menu() {
  const [barOpen, setBarOpen] = useState(false)

  const barOpening = () => {
    setBarOpen(!barOpen)
  }

  return (
    <div className="menu">
      <div className='menu_container'>
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
        <div className="main">
          <img className="instagram_img" src={instagram}></img>
          <img className="facebook_img" src={facebook}></img>

          <Button id="menu_button" txt="ԳՐԱՆՑՎԵԼ ՀԻՄԱ" path="/contact" img="null" />

        </div>
        <div className='menu_burger_container' style={{ flexDirection: "column" }} onClick={barOpening}>
          <div className="burger">
            <img className="burger_img" src={burger}></img>
          </div>
        </div>
      </div>
      {barOpen && <div className="burger_bar">
        <ul>
          <li><NavLink to="/home">ԳԼԽԱՎՈՐ</NavLink></li>
          <li><NavLink to="/about">ՄԵՐ ՄԱՍԻՆ</NavLink></li>
          <li><NavLink to="/classes">ԴԱՍԵՐ</NavLink></li>
          <li><NavLink to="/contact">ԿԱՊ</NavLink></li>
          <li><NavLink to="/spa">ՍՊԱ</NavLink></li>
        </ul>
      </div>
      }
    </div>
  );
}