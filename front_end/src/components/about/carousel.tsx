import React from "react";
import { Carousel } from "antd";
import carousel_rocks from '../../assets/images/about/carousel_rocks.png';
import carousel_retreat from "../../assets/images/about/carousel_retreat.png";
import carousel_incense from "../../assets/images/about/carousel_incense.png";
import carousel_pose from "../../assets/images/about/carousel_pose.png";

const App = () => (
    <>
        <Carousel className="carousel_about" arrows infinite={false}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={carousel_retreat} alt="Retreat"></img>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={carousel_pose} alt="Pose"></img>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={carousel_rocks} alt="Rocks"></img>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={carousel_incense} alt="Incense"></img>
            </div>
        </Carousel>
    </>
);

const AboutCarousel = App;
export default AboutCarousel;
