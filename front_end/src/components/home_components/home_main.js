import React from 'react';
import "./styles/home_main.css"
import Button from "../main_elements/button/button.js";
export default function HomeMain() {
    return (
      <div className="home_main">
        <div className="home_main_text_container">

          <h6>WELCOME TO ZEN YOGA STUDIO</h6>
          <h1>REJUVENATED BODY & SOUL</h1>
          <p>Step into our inclusive yoga studio, where everyone is welcome to find their inner peace and strength.</p>
          <Button id="home_main_button" txt="BOOK A LESSON" path="/contact" color="black"/>
        </div>
        
      </div>
    );
  }