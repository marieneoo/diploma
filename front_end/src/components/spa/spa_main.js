import React from "react";
import "./styles/spa_main.css";
import interior from "../../assets/images/spa/interior.png"
import {Table} from "antd"
export default function SpaMain() {
    const columns = [
        {
          title: 'Մերսումներ',
          dataIndex: 'name',
        },
        {
          title: 'Տևողություն',
          dataIndex: 'chinese',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'Գին',
          dataIndex: 'math',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          chinese: 98,
          math: 60,
          english: 70,
        },
        {
          key: '2',
          name: 'Jim Green',
          chinese: 98,
          math: 66,
          english: 89,
        },
        {
          key: '3',
          name: 'Joe Black',
          chinese: 98,
          math: 90,
          english: 70,
        },
        {
          key: '4',
          name: 'Jim Red',
          chinese: 88,
          math: 99,
          english: 89,
        },
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
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

            {/* <div className="spa_main_container_price_list">
                <div className="spa_main_container_price_list_txt">
                <p>Շվեդական Մերսում</p>
                <p>60 րոպե</p>
                <p>15․000 դրամ</p>
                <p>Խոր Մկանային Մերսում</p>
                <p>75 րոպե</p>
                <p>20․000 դրամ</p>
                <p>Արոմաթերապիա</p>
                <p>60 րոպե</p>
                <p>18․000 դրամ</p>
                <p>Թայ Մերսում</p>
                <p>90 րոպե</p>
                <p>22․000 դրամ</p>
                <p>Քարերով Մերսում</p>
                <p>75 րոպե</p>
                <p>21․000 դրամ</p>
                <p>Մաշկի Խնամքի Տեսակի Խնամք</p>
                <p>60 րոպե</p>
                <p>17․000 դրամ</p>
                </div>

            </div> */}
            <Table columns={columns} dataSource={data} onChange={onChange} />;

            

        </div>
    )
}