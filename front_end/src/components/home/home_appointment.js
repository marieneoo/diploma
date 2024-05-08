import React from 'react';
import "./styles/home_appointment.css"
import Button from "../button/button.js"
export default function HomeAppointment() {
    return (
        <div className="home_appointment">
            <div className="home_appointment_container">
                <h6>ԳՐԱՆՑՈՒՄ</h6>
                <h1>Ցանկանում եք գրանցվել, կամ ունե՞ք հարցեր</h1>
                <h4>Զանգահարե՜ք մեզ +37433344699, կամ ամրագրեք այց</h4>
                <Button txt="ԱՄՐԱԳՐԵԼ ԱՅՑ" id="book_an_appointment_btn" path="/contact" color="white" />
            </div>
        </div>
    )
}