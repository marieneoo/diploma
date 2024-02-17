import "./styles/home_reviews.css"
import commas from "../../assets/images/home/commas.png"
import home_username_pic from "../../assets/images/home/home_username_pic.jpg"
export default function HomeReviews () {
    return(
        <div className="home_reviews">
        <div className="home_reviews_container">
            <img src={commas} className="home_commas_pic"></img>
            <h1>OUR REVIEWS</h1>
            <p>I absolutely love this yoga studio! The inclusive and welcoming atmosphere is truly refreshing. The instructors are not only knowledgeable but also incredibly supportive, making every class a transformative experience.</p>
            <img className="home_username_pic" src={home_username_pic}></img>
            <h5>brenda greene</h5>
            <h6>San Francisco</h6>
        </div>
        </div>
    )
}