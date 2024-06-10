import React, { useEffect, useRef, useState } from 'react';
import "./styles/contact_forms.css";
import clock_icon from "../../assets/images/home/clock_icon.svg";
import location_icon from "../../assets/images/home/location_icon.svg";
import store_icon from "../../assets/images/home/store_icon.svg";
import '../button/styles/button.css';
import emailjs from 'emailjs-com';

export default function HomeForms() {
    const emailRef = useRef();
    const nameRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init("2dOexOx6aOLAburUI");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_2c97jpa";
        const templateId = "template_2391syh";
        const templateParams = {
            name: nameRef.current.value,
            recipient: emailRef.current.value
        };

        try {
            setLoading(true);
            const response = await emailjs.send(serviceId, templateId, templateParams);
            console.log('Email successfully sent:', response.status, response.text);
        } catch (error) {
            console.error('Failed to send email:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home_forms" id='form'>
            <div className="home_make_an_appointment">
                <h4>ԻՆՉԻ՞Ն ԵՔ ՍՊԱՍՈՒՄ...</h4>
                <h1>Ամրագրեք Այց</h1>
                <p>Պատրա՞ստ եք կատարել ձեր առողջական ճանապարհորդության հաջորդ քայլը: Մեր յոգայի ստուդիայում այցի ամրագրումը ձեր առաջին քայլն է դեպի ինքնաբացահայտում և բարեկեցություն:</p>

                <div className="home_opening_hours_container">
                    <div className="home_our_location">
                        <div className="home_our_location_icon">
                            <img src={location_icon} className="home_location_icon" alt="location icon"></img>
                            <h6>ՄԵՐ ՀԱՍՑԵՆ</h6>
                        </div>
                        <p>Hrachya Kochar 41, Yerevan, Armenia</p>
                    </div>

                    <div className="home_clock_store">
                        <div className="home_opening_hours">
                            <div className="home_opening_hours_icon">
                                <img src={clock_icon} className="home_clock_icon" alt="clock icon"></img>
                                <h6>ԱՇԽԱՏՔԱՅԻՆ ԺԱՄԵՐԸ</h6>
                            </div>
                            <p>Երկուշաբթի-ՈՒրբաթ: 6։00-22։00</p>
                            <p>Շաբաթ-Կիրակի: 6։00-20։00</p>
                        </div>

                        <div className="home_contact">
                            <div className="home_contact_icon">
                                <img src={store_icon} className="home_store_icon" alt="store icon"></img>
                                <h6>ԿԱՊ ՄԵԶ ՀԵՏ</h6>
                            </div>
                            <p>Հեռ․՝ +37433344699</p>
                            <p>Էլ․հասցե՝ zenyogastudio@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className="home_forms_inputs" onSubmit={handleSubmit}>
                <div className="home_forms_name_input">
                    <h5>Անուն <p>*</p></h5>
                    <input type="text" name='sendName' ref={nameRef} required />
                </div>

                <div className="home_forms_email_input">
                    <h5>Էլ․հասցե <p>*</p></h5>
                    <input type="email" name='sendMail' ref={emailRef} required />
                </div>

                <div className="home_forms_number_input">
                    <h5>Հեռախոսահամար <p>*</p></h5>
                    <input type="number" required />
                </div>

                <button id="home_form_button" className='button' type='submit' disabled={loading}>
                    {loading ? 'Ուղարկվում է...' : '50% ԶԵՂՉ ՄԻԱՅՆ ԱՅՍՕՐ'}
                </button>
            </form>
        </div>
    );
}
