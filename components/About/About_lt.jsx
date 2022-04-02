import {
    FaMapPin,FaInstagram,FaFacebook,FaMapMarkerAlt,FaLinkedin,FaYoutube,FaEnvelope
} from "react-icons/fa"
import Link from "next/link"
import style from "../../styles/components-css/About/About_lt.module.css"

const About_lt = () =>{
    return (
        <>        
        <div className={style.lovely_media_wrapper}>
            <div className={style.media_wrapper_aces}></div>
            <div className={`${style.media_wrapper_aces} ${style.righted}`}></div>
            <div className={style.media_title_wrapper}>
                <h1 className={`${style.media_title} ${style.pm_remover}`}>
                    Little Thing About Us
                </h1>
            </div>
            <div className={style.media_content_wrapper}>
                <Link href="">
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
                <Link href="">
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
                <Link href="">
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
                <Link href="">
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
                <Link href="">
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
                <Link href="">
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