import React from 'react';
import "./styles/home_reviews.css"
import commas from "../../assets/images/home/commas.png"
import home_username_pic from "../../assets/images/home/home_username_pic.jpg"
export default function HomeReviews() {
    return (
        <div className="home_reviews">
            <div className="home_reviews_container">
                <img src={commas} className="home_commas_pic"></img>
                <h1>ԿԱՐԾԻՔՆԵՐ ՄԵՐ ՄԱՍԻՆ</h1>
                <p>Ես սիրում եմ Զեն Յոգայի Ստուդիան: Ներառական և հյուրընկալ մթնոլորտն իսկապես թարմացնող է: Ուսուցիչները ոչ միայն բանիմաց են, այլև աներևակայելիորեն աջակցում են՝ յուրաքանչյուր դասը դարձնելով փոխակերպող փորձ:</p>
                <img className="home_username_pic" src={home_username_pic}></img>
                <h5>Աննա Մկրտչյան</h5>
                <h6>Ք․ Երևան</h6>
            </div>
        </div>
    )
}