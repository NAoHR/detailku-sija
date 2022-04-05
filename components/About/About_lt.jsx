import {
    FaInstagram,FaFacebook,FaMapMarkerAlt,FaLinkedin,FaYoutube,FaEnvelope
} from "react-icons/fa"
import Link from "next/link"
import style from "../../styles/components-css/About/About_lt.module.css"
import { useEffect } from "react"
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const About_lt = () =>{
    const ref = useRef();                 
    const { events } = useDraggable(ref);


    function bulp(){
        const card = document.getElementsByClassName(style.media_content_wrapper)[0];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1s;transform: translateX(0%);opacity: 1;"
            }else{
                card.style = "transition: 1s;transform: translateX(15%);opacity: 0;"
            }
        }
    }

    useEffect(()=>{
        bulp();
        window.addEventListener("scroll",()=>{
            bulp()
        })
    },[])
    return (
        <>        
        <div className={style.lovely_media_wrapper}>
            <div className={style.media_wrapper_aces}></div>
            <div className={`${style.media_wrapper_aces} ${style.righted}`}></div>
            <div className={style.media_title_wrapper}>
                <h1 className={`${style.media_title} ${style.pm_remover}`}>
                    Mari Berkenalan
                </h1>
            </div>
            <div className={style.media_content_wrapper} {...events} ref={ref} >
                <Link href="https://www.instagram.com/smkn26jktofficial">
                    <a>        
                        <div className={style.social_media_card}>
                            <div className={style.socmed_card_top}>
                                <h1 className={`${style.socmed_icon} ${style.pm_remover}`}>
                                    <FaInstagram />
                                </h1>
                            </div>
                            <div className={style.socmed_card_bottom}>
                                <h2 className={`${style.socmed_title} ${style.pm_remover}`}>
                                    Instagram
                                </h2>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.facebook.com/SMK-Negeri-26-STM-Pembangunan-Jakarta-48205335886/">
                    <a>        
                        <div className={style.social_media_card}>
                            <div className={style.socmed_card_top}>
                                <h1 className={`${style.socmed_icon} ${style.pm_remover}`}>
                                    <FaFacebook />
                                </h1>
                            </div>
                            <div className={style.socmed_card_bottom}>
                                <h2 className={`${style.socmed_title} ${style.pm_remover}`}>
                                    Faceook
                                </h2>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/company/smk-negeri-26-jakarta">
                    <a>        
                        <div className={style.social_media_card}>
                            <div className={style.socmed_card_top}>
                                <h1 className={`${style.socmed_icon} ${style.pm_remover}`}>
                                    <FaLinkedin />
                                </h1>
                            </div>
                            <div className={style.socmed_card_bottom}>
                                <h2 className={`${style.socmed_title} ${style.pm_remover}`}>
                                    LinkedIn
                                </h2>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UC1lmdxhbnccuoXY5fzhO9tg">
                    <a>        
                        <div className={style.social_media_card}>
                            <div className={style.socmed_card_top}>
                                <h1 className={`${style.socmed_icon} ${style.pm_remover}`}>
                                    <FaYoutube />
                                </h1>
                            </div>
                            <div className={style.socmed_card_bottom}>
                                <h2 className={`${style.socmed_title} ${style.pm_remover}`}>
                                    Yotube
                                </h2>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="https://app.lapentor.com/sphere/smkn-26-1602643278?scene=5f87dd1c362df77f177c1f53">
                    <a>        
                        <div className={style.social_media_card}>
                            <div className={style.socmed_card_top}>
                                <h1 className={`${style.socmed_icon} ${style.pm_remover}`}>
                                    <FaMapMarkerAlt />
                                </h1>
                            </div>
                            <div className={style.socmed_card_bottom}>
                                <h2 className={`${style.socmed_title} ${style.pm_remover}`}>
                                    Virtual Tour
                                </h2>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="mailto:smkn26jkt@gmail.com">
                    <a>        
                        <div className={style.social_media_card}>
                            <div className={style.socmed_card_top}>
                                <h1 className={`${style.socmed_icon} ${style.pm_remover}`}>
                                    <FaEnvelope />
                                </h1>
                            </div>
                            <div className={style.socmed_card_bottom}>
                                <h2 className={`${style.socmed_title} ${style.pm_remover}`}>
                                    Email
                                </h2>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
        </>

    )
}

export default About_lt