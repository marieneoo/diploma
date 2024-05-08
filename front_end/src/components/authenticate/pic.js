import React from "react";
import yoga_coaches_group from "../../assets/images/authentication/yoga_coaches_group.png"
import "./styles/pic.css"
export default function AuthenticatePic() {
    return (
        <div className="authenticate_pic_container">
            <img src={yoga_coaches_group} className="authenticate_img"></img>
        </div>
    )
}