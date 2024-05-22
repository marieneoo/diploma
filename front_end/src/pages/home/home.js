import React from 'react';
import "./home.css"
import HomeClasses from "../../components/home/home_classes.js";
import HomeMain from "../../components/home/home_main.js";
import HomeAppointment from "../../components/home/home_appointment.js";
import HomeReviews from "../../components/home/home_reviews.js";
export default function Home() {
  
    return (
      <div className="home">
     <HomeMain/>
     <HomeClasses/>
     <HomeAppointment/>
     <HomeReviews/>
     </div>
    );
  }