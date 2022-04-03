import style from "../styles/components-css/Footer.module.css";
import {
    FaTwitterSquare, FaLinkedin, FaYoutube, FaInstagramSquare, FaHeart
} from "react-icons/fa";
import Link from "next/link";
import { TransitContext } from "../utils/Transition_Context";
import { useContext } from "react";
import CustomLink from "../utils/Custom_link";

const Footer = () => {
    return (
        <>
            <footer className={style.lovely_footer_wrapper}>
                <div className={style.lovely_footer_ball}>
                </div>
                <div className={style.lovely_footer_content}>
                    <div className={style.lovely_more_segment}>
                        <h2 className={`${style.lovely_segment_title} ${style.lovely_center}`}>
                            More
                        </h2>
                        <ul className={style.lovely_ul}>
                            <li className={style.lovely_li}>
                                <CustomLink path={"/"}>
                                    <p className={style.lovely_socmed_title}>
                                        Home
                                    </p>
                                </CustomLink>
                            </li>
                            <li className={style.lovely_li} >
                                <CustomLink path={"/people"}>
                                    <p className={style.lovely_socmed_title}>
                                        People
                                    </p>
                                </CustomLink>
                            </li>
                            <li className={style.lovely_li} >
                                <CustomLink path={"/job"}>
                                    <p className={style.lovely_socmed_title}>
                                        Job
                                    </p>
                                </CustomLink>
                            </li>
                            <li className={style.lovely_li} >
                                <CustomLink path={"/"}>
                                    <p className={style.lovely_socmed_title}>
                                        About
                                    </p>
                                </CustomLink>
                            </li>
                        </ul>
                    </div>
                    <div className={`${style.lovely_socmed_segment}`}>
                        <h2 className={`${style.lovely_segment_title} ${style.lovely_center}`}>
                            Contact
                        </h2>
                        <ul className={style.lovely_ul}>
                            <li className={style.lovely_li}>
                                <Link href="https://id.linkedin.com/company/smk-negeri-26-jakarta/">
                                    <a>
                                        <p className={style.lovely_socmed_title}>
                                            <span className={style.lovely_span}>
                                                <FaLinkedin />
                                            </span> LinkedIn
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className={style.lovely_li}>
                                <Link href="https://twitter.com">
                                    <a>
                                        <p className={style.lovely_socmed_title}>
                                            <span className={style.lovely_span}>
                                                <FaTwitterSquare /> 
                                            </span>
                                            Twitter
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className={style.lovely_li}>
                                <Link href="https://www.youtube.com/channel/UC1lmdxhbnccuoXY5fzhO9tg">
                                    <a>
                                        <p className={style.lovely_socmed_title}>
                                            <span className={style.lovely_span}>
                                                <FaYoutube /> 
                                            </span>
                                            Youtube
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className={style.lovely_li}>
                                <Link href="https://www.instagram.com/smkn26jktofficial">
                                    <a>
                                        <p className={style.lovely_socmed_title}>
                                            <span className={style.lovely_span}>
                                                <FaInstagramSquare / > 
                                            </span>
                                            Instagram
                                        </p>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${style.lovely_address_segment}`}>
                        <h2 className={`${style.lovely_segment_title} ${style.lovely_center}`}>
                            Address
                        </h2>
                        <p className={`${style.lovely_paragraph} ${style.lovely_center}`}>
                        Jl. Balai Pustaka Baru I No.2, RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220
                        </p>
                    </div>
                </div>
                <div className={style.lovely_made_with}>
                    <p className={`${style.lovely_center} ${style.lovely_text}`}>
                        made with 
                        <span style={{
                            color : "var(--orange)",
                            marginRight : "8px",
                            marginLeft : "8px"
                        }}>
                            <FaHeart /> 
                        </span>
                        by Developers
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;