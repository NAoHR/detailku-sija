import style from "../../styles/components-css/Main/AchievedCard.module.css";
import {
    FaTrophy, FaGlobe, FaCompass, FaSeedling, FaHourglassStart
} from "react-icons/fa"
import { useEffect } from "react";

const AchievedCard = (props) => {
    const {detail,num} = props
    function bulp(){
        const card = document.getElementsByClassName(style.lovely_wwha_card)[Number(num)];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1s;transform: translateY(0%);opacity: 1;"
            }else{
                card.style = "transition: 1s;transform: translateY(15%);opacity: 0;"
            }
        }
    }

    useEffect(()=>{
        bulp();
        window.addEventListener("scroll", () => {
            bulp();
        }) 
    },[])
    return (
        <div className={style.lovely_wwha_card}>
            <div className={style.wwha_card_top}>
                <img src={detail.image} alt="" className={style.lovely_wwha_card_image}/>
            </div>
            <div className={style.wwha_card_bottom}>
                <div className={style.wwha_card_text_side}>
                    <h1 className={style.wwha_card_head}>
                        <span className={style.icon_card_text}><FaSeedling /></span> {detail.title}
                    </h1>
                    <div className={style.wwha_sub_head}>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaCompass /></span> {detail.place}
                        </h2>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaGlobe /></span> {detail.compState}
                        </h2>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaTrophy /></span> {detail.placement}
                        </h2>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaHourglassStart /></span> {detail.year}
                        </h2>
                    </div>
                </div>
            </div>
            <div className={style.card_decoration}>
                <h2 className={style.icon_center}>
                    <FaTrophy />
                </h2>
            </div>
        </div>
    )
}

export default AchievedCard;