import React from 'react';
import "./styles/home_classes.css"
import middle_img from "../../assets/images/home/about_classes_img.jpg"
import Button from "../main_elements/button/button"
export default function HomeClasses() {
    return (
        <div className="home_classes_container">
        <div className="home_classes">
            
            <div className="home_about_classes_txt">
                <h2>Մեր դասերի մասին</h2>
                <p>Յոգայի մեր դասընթացներն առաջարկում են հանգիստ առօրյա կյանքից՝ ապահովելով սնուցող միջավայր, որտեղ բոլոր մակարդակների պրակտիկանտները կարող են զգալ յոգայի օգուտը:</p>
                <Button txt="ԳՐԱՆՑՎԵԼ ՀԻՄԱ" id="home_about_classes_button" path="/contact" color="white"/>
            </div>

            <div className="middle_img_div">
                <img src={middle_img} className="middle_img"></img>


            </div>

            <div className="yoga_styles_txt">
                <div className="first_class_txt">
                <h6>01</h6>
                <h4>Հաթա Յոգա</h4>
                <p>Հաթա յոգան հիմնարար պրակտիկա է, որը կենտրոնանում է ֆիզիկական կեցվածքի և շնչառության վերահսկման՝ մարմնի և մտքի հավասարակշռության և ներդաշնակության հասնելու համար: </p>
                </div>

                <div className="second_class_txt">
                    <h6>02</h6>
                    <h4>Վինյասա</h4>
                    <p>Վինյասա յոգան բնութագրվում է կեցվածքի անխափան հոսքով, որը միանում է շնչառության հետ՝ ստեղծելով դինամիկ և միաժամանակ հանգիստ պրակտիկա:</p>

                </div>

                <div className="third_class_txt">
                    
                    <h6>03</h6>
                    <h4>Կունդալինի Յոգա</h4>
                    <p>Կունդալինի յոգան միախառնում է կեցվածքը, շնչառությունը և մեդիտացիայի տեխնիկան՝ ողնաշարի հիմքում էներգիան արթնացնելու համար:</p>

                </div>
            </div>
        

        </div>
        </div>
    )
}