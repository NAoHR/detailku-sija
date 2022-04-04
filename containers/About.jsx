import style from "../styles/containers-css/About.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {
    FaMapPin,FaSchool
} from "react-icons/fa"
import About_Teacher from "../components/About/About_Teacher";
import About_lt from "../components/About/About_lt";
import About_grade from "../components/About/About_grade";

const About_Main = () => {
    return (
        <>
        <Navbar />
        <div className={style.lovely_about_open}>
            <div className={style.lovely_opener_content}>
                <div className={style.lovely_big_about_wrapper}>
                <h1 className={`${style.lovely_about_gtku} ${style.pm_remover} ${style.pin}`}>
                        <FaMapPin />
                    </h1>
                    <h1 className={`${style.lovely_about_gtku} ${style.pm_remover}`}>
                        Ayo <span className={style.lovely_orange}>Kenal</span> <br />Kami Lebih Dalam
                    </h1>
                </div>
            </div>
            <div className={style.lovely_shadowy}></div>
        </div>
        <About_lt />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={style.wave}><path fill="var(--black)" fillOpacity="1" d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,181.3C560,192,640,256,720,282.7C800,309,880,299,960,277.3C1040,256,1120,224,1200,208C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <About_Teacher />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className={style.wave_b}><path fill="#132131" fillOpacity="1" d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,181.3C560,192,640,256,720,282.7C800,309,880,299,960,277.3C1040,256,1120,224,1200,208C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <About_grade />
        <Footer />
        </>
    )
}

export default About_Main;