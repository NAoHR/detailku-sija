import style from "../styles/components-css/Subject_card.module.css";
import {FaRegCalendarAlt} from "react-icons/fa";
import { useEffect } from "react";

export default function Subject_card(props){
    const {index, title, desc} = props;
    function bulp(){
        let card = document.getElementsByClassName(style.lovely_subject_card)[Number(index)];
        let card_top = card.getBoundingClientRect().top;
        let innerHeight = window.innerHeight;
        if(innerHeight > card_top){
            card.style = "transition: 1.3s;transform: translateY(0px);opacity: 1;"
        }else{
            card.style = "transition: 1.3s;transform: translateY(20px);opacity: 0;"
        }
    }

    useEffect(()=>{
        bulp();
        window.addEventListener("scroll", () => {
            bulp()
        })
    },[])

    return( <>
        <div className={style.lovely_subject_card}>
            <div className={style.lovely_subject_icon_side}>
                <h1 className={style.lovelY_icon_wrapper}>
                    <FaRegCalendarAlt />
                </h1>
            </div>
            <div className={style.lovely_subject_fill_side}>
                <h1 className={style.subject_fill_head}>
                    <div className={style.lovely_head_wrapper}>
                        {title}
                    </div>
                </h1>
                <p className={style.subject_fill_description}>
                    {desc}
                </p>
            </div>
        </div>
    </>)
}