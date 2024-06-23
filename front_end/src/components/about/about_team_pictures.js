import React from 'react';
import "./styles/about_meet_our_team_pictures.css"
import instagram_pic from "../../assets/images/main/instagram.svg"
import facebook_pic from "../../assets/images/main/facebook.svg"
import twitter_pic from "../../assets/images/main/twitter_icon.svg"
import first_teacher from "../../assets/images/about/team members/first_teacher.jpg"
import second_teacher from "../../assets/images/about/team members/second_teacher.jpg"
import third_teacher from "../../assets/images/about/team members/third_teacher.jpg"
export default function AboutOurTeamPictures({ pic, name, bio, instagram_path, facebook_path, twitter_path }) {

    if (pic == 1) {
        pic = first_teacher
    }
    else if (pic == 2) {
        pic = second_teacher
    }
    else {
        pic = third_teacher
    }
    return (
        <div className="about_team_pictures_container">
            <img className="teachers_pics" src={pic}></img>
            <h4>{name}</h4>
            <p>{bio}</p>
            <div className="icons">
                <a target='blank' href={instagram_path}><img src={instagram_pic}></img></a>
                <a target='blank' href={facebook_path}><img src={facebook_pic}></img></a>
                <a target='blank' href={twitter_path}><img src={twitter_pic}></img></a>
            </div>
        </div>

    )

} //argumentov funkcia
