import React from 'react';
import "./styles/home_appointment.css"
import Button from "../main_elements/button/button"
export default function HomeAppointment () {
    return(
        <div className="home_appointment">
            <div className="home_appointment_container">
            <h6>APPOINTMENT</h6>
            <h1>Want to make booking or have a question?</h1>
            <h4>Call us on 123-456-7890 or simply book an appointment</h4> 
            <Button txt="BOOK AN APPOINTMENT" id="book_an_appointment_btn" path="/contact" color="white"/>
        </div>
        </div>
    )
}