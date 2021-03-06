import style from "../../styles/components-css/Job/Job_Card.module.css";
import Link from "next/link";
import {
    FaBriefcase,FaMeteor, FaBuilding, FaStickyNote, FaLink
} from "react-icons/fa";
import { useEffect } from "react";

const Job_Card = ({card_detail,index}) => {
    function bulp(){
        const card = document.getElementsByClassName(style.lovely_card)[Number(index)];
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
        window.addEventListener("scroll",()=>{
            bulp()
        })
    },[])
    return (
        <div className={style.lovely_card}>
            <div className={style.lovely_top_side}>
                <div className={style.lovely_bubble}></div>
                <div className={style.lovely_bubble}></div>
                <div className={style.lovely_bubble}></div>
            </div>
            <div className={style.lovely_bottom_side}>
                <div className={style.lovely_gapper}>
                    <h1 className={`${style.lovely_card_title} ${style.mpdefault}`}>
                        <span className={`${style.lovely_gap}`}><FaBriefcase /></span> {card_detail.title}  
                    </h1>
                </div>

                <h3 className={`${style.lovely_perks_h3} ${style.mpdefault}`}>
                    <span className={`${style.lovely_gap}`}><FaMeteor /></span> {card_detail.reqruiter}
                </h3>
                <h3 className={`${style.lovely_perks_h3} ${style.mpdefault}`}>
                    <span className={`${style.lovely_gap}`}><FaBuilding /></span> {card_detail.region}
                </h3>
                <p className={`${style.lovely_card_paragraph} ${style.mpdefault}`}>
                    <span className={`${style.lovely_gap}`}><FaStickyNote /></span> {card_detail.description}
                </p>
                <Link href={card_detail.more}>
                    <a>
                    <h3 className={`${style.lovely_perks_h3} ${style.mpdefault} ${style.perks_link}`}>
                        <span className={`${style.lovely_gap}`}><FaLink /></span> Lebih Lanjut
                    </h3>
                    </a>
                </Link>
            </div>
            <div className={style.lovely_salary_range}>
                <div className={style.salary_wrapper}>
                    <p className={`${style.salary_text} ${style.mpdefault}`}>
                        Rp {String(card_detail.salary.from).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} - Rp {String(card_detail.salary.to).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Job_Card;