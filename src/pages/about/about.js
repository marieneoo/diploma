import "./about.css"
import AboutKnowMore from "../../components/about_components/about_know_more.js";
import ZenYogaStudio from "../../components/about_components/zen_yoga_studio.js";
import BeautyWellness from "../../components/about_components/about_beauty_wellness.js";
import AboutMeetOurTeam from "../../components/about_components/about_meet_our_team.js";
export default function About() {
    return (
      <div className="about">
        <AboutKnowMore/>
        <ZenYogaStudio/>
        <BeautyWellness/>
        <AboutMeetOurTeam/>
      </div>
    );
  }