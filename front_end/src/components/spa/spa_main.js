import React from "react";
import "./styles/spa_main.css";
import interior from "../../assets/images/spa/interior.png"
import TableSpa from "./table.tsx"
export default function SpaMain() {

    return (
        <div className="spa_main">
            <div className="spa_main_container">
                <div className="spa_main_container_txt">
                    <p>
                        Բարի գալուստ մեր Սպա կենտրոն, որտեղ խաղաղությունը հանդիպում է երիտասարդացմանը: Մեր շքեղ սպա կենտրոնը առաջարկում է խնամքով մշակված բուժումների հավաքածու, որոնք նախատեսված են վերականգնելու ձեր մտքի, մարմնի և հոգու էներգիան:
                    </p>

                    <p>
                    Հանգիստ Բարության Մերսում – Հանգստացեք մեր մերսման հատուկ մեթոդով, որը նախատեսված է լարվածությունը նվազեցնելու և հավասարակշռությունը վերականգնելու համար: Ընտրեք ձեր նախընտրություններին համապատասխանող տարբեր մեթոդներից:Խորը Հյուսվածքների Վերականգնում – Նպատակային ճնշում և խորը հյուսվածքների աշխատանք՝ մկանային ցավը թեթևացնելու և բուժումը խթանելու համար:
                    </p>

                </div>

                <div className="spa_main_container_pics">
                    <img className="img_interior" src={interior}></img>

                </div>
            </div>
            <div className="table_spa">
            <TableSpa/>
            </div>
        </div>
    )
}