import React from 'react';
import "./styles/about_beauty_wellness.css"
import lotus_pic from "../../assets/images/about/lotus_pic.svg"
import hands_pic from "../../assets/images/about/hands_pic.png"
import lessons_pic from "../../assets/images/about/lessons_pic.png"
export default function BeautyWellness() {
    return (
        <div className="beauty_wellness_container">
            <div className="wellness">
                <img src={lotus_pic} className="lotus_pic"></img>
                <h4>Առողջություն</h4>
                <p>Առողջությունը ֆիզիկական, մտավոր և էմոցիոնալ բարեկեցության ներդաշնակ ինտեգրումն է, որը թույլ է տալիս անհատներին լիարժեք և հավասարակշռված կյանք վարել:</p>

            </div>

            <div className="beauty">
                <img src={hands_pic} className="hands_pic"></img>
                <h4>Հանգիստ</h4>
                <p>Յոգայի մեր դասերի ընթացքում դուք կսկսեք ինքնաբացահայտման, հավասարակշռության և հանգստության ճամփորդություն՝ ուսումնասիրելով շնչառության և շարժման փոխակերպող ուժը:</p>

            </div>

            <div className="lessons">
                <img src={lessons_pic} className="lessons_pic"></img>
                <h4>Դասեր</h4>
                <p>Յոգայի մեր դասընթացներն առաջարկում են փախչել առօրյա կյանքի եռուզեռից՝ ապահովելով սնուցող միջավայր, բոլոր մակարդակների պրակտիկանտների համար</p>

            </div>
        </div>
    )
}