import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "../styles/containers-css/NotFound.module.css";
import CustomLink from "../utils/Custom_link";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";

const NotFound = ({message, redirect, title}) => {
    return (
        <>
            <Navbar />
                <div className={style.lovely_nf_wrapper}>
                    <div className={style.lovely_redirect}>
                        <CustomLink path={redirect}>
                            <span className={`${style.lovely_icon_r} ${style.lovely_format}`}>
                                <BsFillArrowLeftCircleFill />
                            </span>
                        </CustomLink>
                        <CustomLink path={redirect}>
                            <h1 className={`${style.redirect_text} ${style.pm_remover} ${style.lovely_format}`}>
                                Go Back
                            </h1>
                        </CustomLink>
                    </div>
                    <div className={style.lovely_nf_content}>
                        <div className={style.image_wrapper}>
                            <img src="/404.svg" alt="404" className={style.lovely_image} />
                        </div>
                        <h2 className={`${style.lovely_title} ${style.pm_remover} ${style.lovely_format}`}>
                            {title}
                        </h2>
                        <h2 className={`${style.lovely_message} ${style.pm_remover} ${style.lovely_format}`}>
                            {message}
                        </h2>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default NotFound;