import React from 'react';
import "./styles/home_forms.css"
import Button from "../button/button.js"
import clock_icon from "../../assets/images/home/clock_icon.svg"
import location_icon from "../../assets/images/home/location_icon.svg"
import store_icon from "../../assets/images/home/store_icon.svg"
export default function HomeForms() {
    // const [email, setEmail] = useState({
    //     mail: '',
    //     text: ''
    // }) //sarqel enq state user-i state-i hamar, vory uni fielder

    // const handleChange = (event) => {
    //     let name = event.target.name
    //     let value = event.target.value//vercnum enq html-i konkret input-i value
    //     //state-y update enq anum nor input-i valuenerov
    //     setUser({ ...user, [name]: value })
    // } 
    return (
        <div className="home_forms">
            <div className="home_make_an_appointment">
                <h4>ԻՆՉԻ՞Ն ԵՔ ՍՊԱՍՈՒՄ...</h4>
                <h1>Ամրագրեք Այց</h1>
                <p>Պատրա՞ստ եք կատարել ձեր առողջական ճանապարհորդության հաջորդ քայլը: Մեր յոգայի ստուդիայում այցի ամրագրումը ձեր առաջին քայլն է դեպի ինքնաբացահայտում և բարեկեցություն: </p>

                <div className="home_opening_hours_container">


                    <div className="home_our_location">
                        <div className="home_our_location_icon">
                            <img src={location_icon} className="home_location_icon"></img>
                            <h6>ՄԵՐ ՀԱՍՑԵՆ</h6>
                        </div>

                        <p>Hrachya Kochar 41, Yerevan, Armenia</p>
                    </div>

                    <div className="home_clock_store">

                        <div className="home_opening_hours">
                            <div className="home_opening_hours_icon">
                                <img src={clock_icon} className="home_clock_icon"></img>
                                <h6>ԱՇԽԱՏՔԱՅԻՆ ԺԱՄԵՐԸ</h6>
                            </div>

                            <p>Երկուշաբթի-ՈՒրբաթ: 6։00-22։00</p>
                            <p>Շաբաթ-Կիրակի: 6։00-20։00</p>
                        </div>

                        <div className="home_contact">
                            <div className="home_contact_icon">
                                <img src={store_icon} className="home_store_icon"></img>
                                <h6>ԿԱՊ ՄԵԶ ՀԵՏ</h6>
                            </div>

                            <p>Հեռ․՝ +37433344699</p>
                            <p>Էլ․հասցե՝ zenyogastudio@gmail.com</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="home_forms_inputs">
                <div className="home_forms_name_input">
                    <h5>Անուն <p>*</p></h5>
                    <input type="text" required></input>
                </div>

                <div className="home_forms_email_input">
                    <h5>Էլ․հասցե <p>*</p></h5>
                    <input type="mail" required></input>
                </div>

                <div className="home_forms_number_input">
                    <h5>Հեռախոսահամար <p>*</p></h5>
                    <input type="number" required></input>
                </div>

                <Button txt="50% ԶԵՂՉ ՄԻԱՅՆ ԱՅՍՕՐ" id="home_form_button" path="/contact" color="black" img="none" />

            </div>



        </div>
    )
}