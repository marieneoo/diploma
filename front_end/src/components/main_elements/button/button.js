import "./styles/button.css"
import { NavLink } from "react-router-dom"

export default function Button({ txt, id, path, img, color }) {
    return (
        <NavLink className={`button ${color}`} id={id} to={path}>
            {txt}
            {img ? null : <div className="arrow" alt="Arrow"></div>}
        </NavLink>
    )

}