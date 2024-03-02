import "./styles/menu.css"
import Bar from "../menu/bar.js"
import Main from "./main.js";
import instagram from "../../assets/images/instagram.svg"
import facebook from "../../assets/images/facebook.svg"
import Burger from "./burger.js";
export default function Menu() {
    return (
      <div className="menu">
        <Bar/>
        <Main/>
        <Burger/>
      </div>
    );
  }