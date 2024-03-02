import "./styles/about_beauty_wellness.css"
import lotus_pic from "../../assets/images/about/lotus_pic.svg"
import hands_pic from "../../assets/images/about/hands_pic.png"
import lessons_pic from "../../assets/images/about/lessons_pic.png"
export default function BeautyWellness() {
    return(
        <div className="beauty_wellness_container">
            <div className="wellness">
                <img src={lotus_pic} className="lotus_pic"></img>
                <h4>Wellness</h4>
                <p>Wellness is the harmonious integration of physical, mental, and emotional well-being, allowing individuals to lead a fulfilling and balanced life.</p>

            </div>

            <div className="beauty">
                <img src={hands_pic} className="hands_pic"></img>
                <h4>Beauty</h4>
                <p>In our yoga lessons, you'll embark on a journey of self-discovery, balance, and tranquility, as you explore the transformative power of breath and movement.</p>

            </div>

            <div className="lessons">
                <img src={lessons_pic} className="lessons_pic"></img>
                <h4>Lessons</h4>
                <p>Our yoga classes offer a serene escape from the hustle and bustle of everyday life, providing a nurturing environment where practitioners of all levels</p>

            </div>
        </div>
    )
}