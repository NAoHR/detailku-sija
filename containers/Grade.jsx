import style from "../styles/containers-css/Grade.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeCard from "../components/people/GradeCard";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import CustomLink from "../utils/Custom_link";

const GradeCard_looper = ({data}) => {
    return data.map((val,index) => {
        return <GradeCard creds={val} key={index}/>
    })
}

const Grade_Main = ({eachdata}) => {
    return (
        <>
            <Navbar />
            <div className={style.lovely_go_back}>
                <div className={style.lovely_gb_wrap}>
                    <CustomLink path={"/people"}>
                        <h1 className={`${style.lovely_gb_icon} ${style.pm_remover}`}>
                            <BsFillArrowLeftCircleFill />
                        </h1>
                    </CustomLink>
                    <CustomLink path={"/people"}>
                        <h1 className={`${style.lovely_gb_text} ${style.pm_remover}`}>
                            Kembali
                        </h1>
                    </CustomLink>
                </div>
            </div>
            <div className={style.lovely_grade_wrapper}>
                <GradeCard_looper data={eachdata} />
            </div>
            <Footer />
        </>
    )
}

export default Grade_Main;