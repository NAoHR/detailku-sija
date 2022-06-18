import style from "../../styles/components-css/Main/Subject_card.module.css";
import {FaBookReader} from "react-icons/fa";
import { useEffect } from "react";

export default function Subject_card(props){
    let {index, title, desc} = props;
    title = title.split("-");

    function bulp(){
        let card = document.getElementsByClassName(style.lovely_subject_card)[Number(index)];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1.3s;transform: translateY(0px);opacity: 1;"
            }else{
                card.style = "transition: 1.3s;transform: translateY(20px);opacity: 0;"
            }
        }
    }

    useEffect(function (){
        bulp();
        window.addEventListener("scroll", function(){
            bulp()
        })
    },[])

    return( <>
        <div className={style.lovely_subject_card}>
            <div className={style.lovely_subject_icon_side}>
                <h1 className={style.lovelY_icon_wrapper}>
                    <FaBookReader />
                </h1>
            </div>
            <div className={style.lovely_subject_fill_side}>
                <div className={style.lovely_head_wrapper}>
                    <h1 className={style.subject_fill_head}>{
                        title.length > 1 ? <span>{title[0]} <br /> {title[1]} </span> : title[0]
                    }</h1>
                </div>
                <p className={style.subject_fill_description}>
                    {desc}
                </p>
            </div>
        </div>
    </>)
}