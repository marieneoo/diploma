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
                <h2>Մեզ մոտ կարող եք հանգստանա</h2>
                <img src={commas_pic} className="commas_pic"></img>
                <p>Ես կարող եմ միայն լավ բաներ ասել այս յոգայի ստուդիայի մասին: Այն պահից, երբ ես մտա ներս, ես ինձ հանգիստ զգացի: Հրահանգիչները ոչ միայն հմուտ են, այլև աներևակայելի կարեկցող:</p>
                <div className="zen_yoga_studio_relax_profile">
                    <img src={username_pic} className="username_pic"></img>

                    <div className="zen_yoga_studio_relax_profile_txt">
                    <p>աննա մկրտչյան</p>
                    <p>Ք․ Երևան</p>
                    </div>

                </div>
            </div>

            <div className="zen_yoga_studio_slider">
                <img src={yoga_retreat} className="yoga_retreat_pic"></img>

            </div>

            <div className="zen_yoga_studio_paragraph">
                <p>Մեր յոգայի ստուդիայում մենք նվիրված ենք բարեկեցության, աճի և ներառականության համայնքի զարգացմանը: Մեր ճամփորդությունը սկսվեց պարզ, բայց խորը հավատով դեպի կյանքը հարստացնելու յոգայի փոխակերպող ուժը: Մենք ստեղծել ենք մի տարածք, որտեղ յուրաքանչյուրը, անկախ իր փորձի մակարդակից, կարող է մասնակցել մեր դասընթացներին:</p>
                <p>Փորձառու և կարեկցող հրահանգիչների մեր թիմը պարտավորվում է առաջնորդել ձեզ յոգայի ոճերի բազմազանությամբ՝ սկսած Հաթայի նուրբ և հիմնավոր պրակտիկայից մինչև Վինյասայի կազդուրիչ հոսքը և Կունդալինիի հոգևոր լուսավոր ճամփորդությունը: Մենք հավատում ենք, որ յոգան ոչ միայն ֆիզիկական պրակտիկա է, այլ ամբողջական ապրելակերպ, որը կարող է հանգեցնել ավելի մեծ կատարման և հավասարակշռության առօրյա կյանքում: </p>

            </div>

        </div>
    )
}