import React from 'react';
import "./styles/about_meet_our_team.css"
import AboutOurTeamPictures from "./about_team_pictures"
export default function AboutMeetOurTeam() {
    return (
        <div className="about_meet_our_team">
            <div className="about_meet_our_team_top">
                <h2>Մեր Հրահանգիչները</h2>
                <p>Zen Yoga Studio-ի մեր նվիրված թիմը մեր համայնքի համար սնուցող և փոխակերպող յոգայի փորձ է ստեղծում:</p>
            </div>
            <div className="about_meet_our_team_teachers">
                <div className="about_meet_our_team_first_teacher">
                    <AboutOurTeamPictures pic="1"
                        name="Արփինե Հարությունյան"
                        bio="Ունենալով Հաթայի և գիտակցության պրակտիկաների փորձ՝ Արփինեն հանգստացնող միջավայր է ստեղծում իր դասերին։"
                        instagram_path="https://www.instagram.com/arpine.yoga?igsh=ejZuOHBtZWFveW16"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />
                </div>

                <div className="about_meet_our_team_second_teacher">
                <AboutOurTeamPictures pic="2"
                        name="Նատալի Նազարյան"
                        bio="Որպես Վինյասայի մասնագետ՝ Նատալիի դասերը դինամիկ են՝ խրախուսելով ուսանողներին ուսումնասիրել իրենց ներքին ուժը:"
                        instagram_path="https://www.instagram.com/kulbak_natasha?igsh=d3R3bTByNm5lNXEx"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />

                </div>

                <div className="about_meet_our_team_third_teacher">
                <AboutOurTeamPictures pic="3"
                        name="Արփի Սարգսյան"
                        bio="Մասնագիտանալով Կունդալինի յոգայում՝ Արփին ուղղորդում է ուսանողներին հոգևոր ճամփորդության մեջ՝օգնելով նրանց բացահայտել սեփական անձը:"
                        instagram_path="https://www.instagram.com/arpi_yoga?igsh=MzEyOGJxYnk3bGlo"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />

                </div>

            </div>
        </div>

    )
}