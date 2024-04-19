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
                        name="Մարիա Հարությունյան"
                        bio="Ունենալով Հաթայի և գիտակցության պրակտիկաների փորձ՝ Մարիան հանգստացնող միջավայր է ստեղծում իր դասերին։"
                        instagram_path="https://www.instagram.com/"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />
                </div>

                <div className="about_meet_our_team_second_teacher">
                <AboutOurTeamPictures pic="2"
                        name="Էմիլի Նազարյան"
                        bio="Որպես Վինյասայի մասնագետ՝ Էմիլիի դասերը դինամիկ են՝ խրախուսելով ուսանողներին ուսումնասիրել իրենց ներքին ուժը:"
                        instagram_path="https://www.instagram.com/"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />

                </div>

                <div className="about_meet_our_team_third_teacher">
                <AboutOurTeamPictures pic="3"
                        name="Ադրիեն Սարգսյան"
                        bio="Մասնագիտանալով Կունդալինի յոգայում՝ Լաուրան ուղղորդում է ուսանողներին հոգևոր ճամփորդության մեջ՝օգնելով նրանց բացահայտել սեփական անձը:"
                        instagram_path="https://www.instagram.com/"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />

                </div>

            </div>
        </div>

    )
}