import React, { useEffect, useInsertionEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import "./styles/menu.css"
import Cookies from "js-cookie"
import instagram from "../../assets/images/main/instagram.svg"
import facebook from "../../assets/images/main/facebook.svg"
import lotus from "../../assets/images/main/lotus_logo.svg"
import burger from "../../assets/images/main/burger.svg"
import Button from "../button/button.js"
import user_icon from "../../../src/assets/images/main/user_icon.svg"
import log_out_icon from "../../assets/images/button/log_out_icon.svg"


export default function Menu() {
  const [barOpen, setBarOpen] = useState(false)
  const [token, setToken] = useState(null)
  const [logOut, setLogOut] = useState(false)
  const navigate = useNavigate()
  const barOpening = () => {
    setBarOpen(!barOpen)
  }

  const barLogOut = () => {
    setLogOut(!logOut)
     
  }



  useInsertionEffect(()=>{
    
    const tokenFromCookie = Cookies.get('auth')
    if(tokenFromCookie){
      setToken(tokenFromCookie)
      console.log(token)
    }else{
      console.log("token chka")
    }
  }, [])

  const logOutFunc = () => {
    Cookies.remove('auth')
    navigate('/login')
    window.location.reload()
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

          {!token && <Button id="menu_button" txt="ԳՐԱՆՑՎԵԼ ՀԻՄԱ" path="/contact" img="null" />}
          {token && <img onClick={barLogOut} className='user_icon' src={user_icon}></img>}

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

      {logOut && <div className='log_out'>
        <div className='log_out_container'>
        <button onClick={logOutFunc} className='form-control'>Log Out <img src={log_out_icon} className='log_out_icon'></img></button>
        </div>
        </div> }
    </div>
  );
}