import React from 'react';
import "./styles/home_main.css"
import Button from "../main_elements/button/button.js";
export default function HomeMain() {
    return (
      <div className="home_main">
        <div className="home_main_text_container">

          <h6>ԲԱՐԻ ԳԱԼՈՒՍՏ ZEN YOGA STUDIO</h6>
          <h1>ԵՐԻՏԱՍԱՐԴԱՑԱԾ ՄԱՐՄԻՆ և ՀՈԳԻ</h1>
          <p>Մտեք մեր ներառական յոգայի ստուդիա, որտեղ բոլորը կարող են գտնել իրենց ներքին խաղաղությունն ու ուժը:</p>
          <Button id="home_main_button" txt="ԳՐԱՆՑՎԵԼ ԴԱՍԸՆԹԱՑԻ" path="/contact" color="black"/>
        </div>
        
      </div>
    );
  }