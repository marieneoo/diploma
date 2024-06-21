import React from 'react';
import { NavLink } from "react-router-dom"
import "./footer.css"
import instagram_pic from "../../assets/images/main/instagram.svg"
import facebook_pic from "../../assets/images/main/facebook.svg"
import twitter_pic from "../../assets/images/main/twitter_icon.svg"
import lotus_pic from "../../assets/images/main/lotus_logo.svg"
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_up">
                <div className="footer_up_logo">
                    <img src={lotus_pic} className="lotus_pic_footer"></img>
                    <p>Լոտոսը՝ նուրբ ջրային ծաղիկը, գրավում է ջրերից դուրս եկող իր փայլուն ծաղկաթերթիկներով: Այս նրբագեղ ծաղիկը մաքրության և հանգստության խորհրդանիշ է:</p>
                </div>

                <div className="footer_up_services">
                    <h2>Ծառայություններ</h2>
                    <NavLink to="/spa">Սպա</NavLink>
                    <NavLink to="/spa">Քարերով թերապիա</NavLink>
                    <NavLink to="/spa">Շոքեբաղնիք</NavLink>
                    <NavLink to="/spa">Մաշկի բուժում</NavLink>

                </div>

                <div className="footer_up_about">
                    <h2>Մեր Մասին</h2>
                    <NavLink to="/about">Մեր մասին</NavLink>
                    <NavLink to="/about">Մեր մասնագետները</NavLink>
                    <NavLink to="/about">Գները</NavLink>
                    <NavLink to="/about">Կապ</NavLink>

                </div>

                <div className="footer_up_get_in_touch">
                    <h2>Կապ</h2>
                    <NavLink to="/contact">Hrachya Kochar 41</NavLink>
                    <NavLink to="/contact">Yerevan, Armenia</NavLink>
                    <NavLink to="/contact">+374 33 344 699</NavLink>
                    <NavLink to="/contact">zenyogastudio.com</NavLink>
                </div>


            </div>

            <div className="footer_down">
                <div className="footer_down_copyright">
                    <p>Copyright © 2024 . Powered by ZenYogaStudio</p>

                </div>

                <div className="footer_down_icons">
                    <a target='blank' href='https://www.instagram.com/zenyoga.yvn/'><img src={instagram_pic} className="instagram_pic"></img></a>
                    <a target='blank' href='https://www.facebook.com/profile.php?id=61561104338630'><img src={facebook_pic} className="facebook_pic"></img></a>
                </div>

            </div>

        </div>
    )
}