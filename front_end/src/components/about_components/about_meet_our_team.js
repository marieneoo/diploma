import React from 'react';
import "./styles/about_meet_our_team.css"
import AboutOurTeamPictures from "./about_team_pictures"
export default function AboutMeetOurTeam() {
    return (
        <div className="about_meet_our_team">
            <div className="about_meet_our_team_top">
                <h2>Meet Our Team</h2>
                <p>Our dedicated team at Zen Yoga Studio is at the heart of our mission to create a nurturing and transformative yoga experience for our community.</p>

            </div>
            <div className="about_meet_our_team_teachers">
                <div className="about_meet_our_team_first_teacher">
                    <AboutOurTeamPictures pic="1"
                        name="Joan Alexandra"
                        bio="With a background in Hatha and mindfulness practices, Joan brings a calm and soothing presence to her classes, focusing on alignment and breath to help students find balance and serenity."
                        instagram_path="https://www.instagram.com/"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />
                </div>

                <div className="about_meet_our_team_second_teacher">
                <AboutOurTeamPictures pic="2"
                        name="Emily Johansson"
                        bio="A Vinyasa enthusiast, Emily's classes are dynamic and invigorating, encouraging students to push their boundaries and explore their inner strength while maintaining a mindful connection to their breath."
                        instagram_path="https://www.instagram.com/"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />

                </div>

                <div className="about_meet_our_team_third_teacher">
                <AboutOurTeamPictures pic="3"
                        name="Laura Kyle"
                        bio="Specializing in Kundalini yoga,Laura guides students on a spiritually enriching journey, tapping into the powerful energy within and helping them discover a deeper sense of self and purpose."
                        instagram_path="https://www.instagram.com/"
                        facebook_path="https://www.facebook.com/"
                        twitter_path="https://twitter.com/?lang=en"
                    />

                </div>

            </div>
        </div>

    )
}