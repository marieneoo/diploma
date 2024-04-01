import React from 'react';
import instagram from "../../assets/images/instagram.svg"
import facebook from "../../assets/images/facebook.svg"
import { NavLink } from "react-router-dom"
import Button from "../main_elements/button/button"
export default function Main() {
    return(
        <div className="main">
        <img className="instagram_img" src={instagram}></img>
        <img className="facebook_img" src={facebook}></img>
{/*        
            <NavLink className="book_now_btn"  to="/contact" >BOOK NOW</NavLink> */}

            <Button id="menu_button" txt="ԳՐԱՆՑՎԵԼ ՀԻՄԱ" path="/contact" img="null" />
        
        </div>
    )


}