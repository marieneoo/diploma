import React from 'react';
import "./styles/home_forms.css"
import Button from "../main_elements/button/button.js"
import clock_icon from "../../assets/images/home/clock_icon.svg"
import location_icon from "../../assets/images/home/location_icon.svg"
import store_icon from "../../assets/images/home/store_icon.svg"
export default function HomeForms() {
    return (
        <div className="home_forms">
            <div className="home_make_an_appointment">
                <h4>WHAT ARE YOU WAITING FOR...</h4>
                <h1>Make an appointment</h1>
                <p>Ready to take the next step in your wellness journey? Making an appointment at our yoga studio is your first step toward self-discovery and well-being. Whether you’re a seasoned yogi or a beginner, our expert instructors are here to guide you.</p>

                <div className="home_opening_hours_container">


                    <div className="home_our_location">
                        <div className="home_our_location_icon">
                            <img src={location_icon} className="home_location_icon"></img>
                            <h6>OUR LOCATION</h6>
                        </div>

                        <p>123 Fifth Avenue, New York, NY 10160, United States.</p>
                    </div>

                    <div className="home_clock_store">
                        
                    <div className="home_opening_hours">
                        <div className="home_opening_hours_icon">
                        <img src={clock_icon} className="home_clock_icon"></img>
                            <h6>OPENING HOURS</h6>
                        </div>

                        <p>Mon-Fri: 6am-10pm</p>
                        <p>Sat-Sun: 8am-2pm</p>
                    </div>

                    <div className="home_contact">
                        <div className="home_contact_icon">
                        <img src={store_icon} className="home_store_icon"></img>
                            <h6>CONTACT</h6>
                        </div>

                        <p>Phone: +1 123-456-7890</p>
                        <p>Email: zenyogastudio@gmail.com</p>
                    </div>
                    </div>


                </div>
                </div>

                <div className="home_forms_inputs">
                    <div className="home_forms_name_input">
                    <h5>Name <p>*</p></h5>
                    <input type="text" required></input>
                    </div>
                    
                    <div className="home_forms_email_input">
                    <h5>Email <p>*</p></h5>
                    <input type="mail" required></input>
                    </div>
                    
                    <div className="home_forms_number_input">
                    <h5>Phone number <p>*</p></h5>
                    <input type="number" required></input>
                    </div>

                    <Button txt="SAVE UP TO 50% TODAY" id="home_form_button" path="/contact" color="black" img="none" />

                </div>



            </div>
            )
}