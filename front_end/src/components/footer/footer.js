import React from 'react';
import { NavLink } from "react-router-dom"
import "./footer.css"
import instagram_pic from "../../assets/images/instagram.svg"
import facebook_pic from "../../assets/images/facebook.svg"
import twitter_pic from "../../assets/images/twitter_icon.svg"
import lotus_pic from "../../assets/images/lotus_logo.svg"
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_up">
                <div className="footer_up_logo">
                    <img src={lotus_pic} className="lotus_pic_footer"></img>
                    <p> The lotus, an exquisite aquatic flower, captivates with its radiant petals emerging from murky waters. This elegant bloom is not only a symbol of purity.</p>
                </div>

                <div className="footer_up_services">
                    <h2>Services</h2>
                    <NavLink to="/spa">Luxury Spa</NavLink>
                    <NavLink to="/spa">Stone Therapy</NavLink>
                    <NavLink to="/spa">Aroma Spa</NavLink>
                    <NavLink to="/spa">Skin Treatment</NavLink>

                </div>

                <div className="footer_up_about">
                    <h2>About</h2>
                    <NavLink to="/about">Our Story</NavLink>
                    <NavLink to="/about">Experts</NavLink>
                    <NavLink to="/about">Pricing</NavLink>
                    <NavLink to="/about">Contact Us</NavLink>

                </div>

                <div className="footer_up_get_in_touch">
                    <h2>Get In Touch</h2>
                    <NavLink to="/contact">123 Fifth Avenue</NavLink>
                    <NavLink to="/contact">060, Armenia.</NavLink>
                    <NavLink to="/contact">+374 33 344 699</NavLink>
                    <NavLink to="/contact">yinyoga@gmail.com</NavLink>
                </div>


            </div>

            <div className="footer_down">
                <div className="footer_down_copyright">
                    <p>Copyright © 2024 . Powered by .</p>

                </div>

                <div className="footer_down_icons">
                    <img src={instagram_pic} className="instagram_pic"></img>
                    <img src={facebook_pic} className="facebook_pic"></img>
                    <img src={twitter_pic} className="twitter_pic"></img>

                </div>

            </div>

        </div>
    )
}