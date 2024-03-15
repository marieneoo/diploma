import React from 'react';
import "./styles/home_classes.css"
import middle_img from "../../assets/images/home/about_classes_img.jpg"
import Button from "../main_elements/button/button"
export default function HomeClasses() {
    return (
        <div className="home_classes_container">
        <div className="home_classes">
            
            <div className="home_about_classes_txt">
                <h2>About our classes</h2>
                <p>Our yoga classes offer a serene escape from the hustle and bustle of everyday life, providing a nurturing environment where practitioners of all levels can experience the profound benefits of yoga.</p>
                <Button txt="BOOK NOW" id="home_about_classes_button" path="/contact" color="white"/>
            </div>

            <div className="middle_img_div">
                <img src={middle_img} className="middle_img"></img>


            </div>

            <div className="yoga_styles_txt">
                <div className="first_class_txt">
                <h6>01</h6>
                <h4>Hatha Yoga</h4>
                <p>Hatha yoga is a foundational practice that focuses on physical postures (asanas) and breath control (pranayama) to achieve balance and harmony in the body and mind. </p>
                </div>

                <div className="second_class_txt">
                    <h6>02</h6>
                    <h4>Vinyasa Flow</h4>
                    <p>Vinyasa yoga is characterized by the seamless flow of postures, synchronized with breath, creating a dynamic and challenging practice.</p>

                </div>

                <div className="third_class_txt">
                    
                    <h6>03</h6>
                    <h4>Kundalini Yoga</h4>
                    <p>Kundalini yoga blends postures, breathwork, and meditation techniques to awaken the energy at the base of the spine.</p>

                </div>
            </div>
        

        </div>
        </div>
    )
}