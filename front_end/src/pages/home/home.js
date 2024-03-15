import React from 'react';
import "./home.css"
import HomeClasses from "../../components/home_components/home_classes.js";
import HomeMain from "../../components/home_components/home_main.js";
import HomeAppointment from "../../components/home_components/home_appointment.js";
import HomeReviews from "../../components/home_components/home_reviews.js";
import HomeForms from "../../components/home_components/home_forms.js";
export default function Home() {
    return (
      <div className="home">
     <HomeMain/>
     <HomeClasses/>
     <HomeAppointment/>
     <HomeReviews/>
     <HomeForms/>
     </div>
    );
  }