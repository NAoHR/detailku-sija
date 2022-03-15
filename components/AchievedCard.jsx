import style from "../styles/components-css/AchievedCard.module.css";
import {
    FaTrophy, FaGlobe, FaCompass, FaSeedling, FaHourglassStart
} from "react-icons/fa"

const AchievedCard = () => {
    return (
        <div className={style.lovely_wwha_card}>
            <div className={style.wwha_card_top}>
                <img src="https://ufa.org.uk/wp-content/uploads/2015/04/img_9944-e1428558388289.jpg" alt="" className={style.lovely_wwha_card_image}/>
            </div>
            <div className={style.wwha_card_bottom}>
                <div className={style.wwha_card_text_side}>
                    <h1 className={style.wwha_card_head}>
                        <span className={style.icon_card_text}><FaSeedling /></span> IOT South East Asia Creative Camp
                    </h1>
                    <div className={style.wwha_sub_head}>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaCompass /></span> SEAMEO
                        </h2>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaGlobe /></span> Internasional
                        </h2>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaTrophy /></span> Juara 1
                        </h2>
                        <h2 className={style.wwha_card_place}>
                            <span className={style.icon_card_text}><FaHourglassStart /></span> 2018
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