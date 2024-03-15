import React from 'react';
import "./styles/zen_yoga_studio.css"
import commas_pic from "../../assets/images/home/commas.png"
import username_pic from "../../assets/images/home/home_username_pic.jpg"
import yoga_retreat from "../../assets/images/about/yoga_retreat.jpg"
export default function ZenYogaStudio() {
    return (
        <div className="zen_yoga_studio">
            <div className="zen_yoga_studio_relax">
                <h6>ZEN YOGA STUDIO</h6>
                <h2>Where you can relax and enjoy life</h2>
                <img src={commas_pic} className="commas_pic"></img>
                <p>I can't say enough good things about this yoga studio. From the moment I stepped through the door, I felt welcomed and at ease. The instructors are not only skilled but also incredibly compassionate.</p>
                <div className="zen_yoga_studio_relax_profile">
                    <img src={username_pic} className="username_pic"></img>

                    <div className="zen_yoga_studio_relax_profile_txt">
                    <p>brenda greene</p>
                    <p>San Francisco</p>
                    </div>

                </div>
            </div>

            <div className="zen_yoga_studio_slider">
                <img src={yoga_retreat} className="yoga_retreat_pic"></img>

            </div>

            <div className="zen_yoga_studio_paragraph">
                <p>At our yoga studio, we are dedicated to fostering a community of well-being, growth, and inclusivity. Our journey began with a simple but profound belief in the transformative power of yoga to enrich lives. We have created a space where everyone, regardless of their level of experience, can embark on a path of self-discovery, finding harmony of body and mind.</p>
                <p>Our team of experienced and compassionate instructors is committed to guiding you through a diverse range of yoga styles, from the gentle and grounding practice of Hatha to the invigorating flow of Vinyasa and the spiritually enlightening journey of Kundalini. We believe that yoga is not just a physical practice but a holistic lifestyle that can lead to greater fulfillment and balance in everyday life. Come join us in our welcoming and nurturing studio, and let’s embark on this journey to wellness and self-realization together.</p>

            </div>

        </div>
    )
}