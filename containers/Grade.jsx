import style from "../styles/containers-css/Grade.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeCard from "../components/people/GradeCard";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import { TransitContext } from "../utils/Transition_Context";
import { useContext } from "react";

const GradeCard_looper = ({data}) => {
    return data.map((val,index) => {
        return <GradeCard creds={val} key={index}/>
    })
}

const Grade_Main = ({eachdata}) => {
    const TransitHandler = useContext(TransitContext);
    return (
        <>
            <Navbar />
            <div className={style.lovely_go_back}>
                <div className={style.lovely_gb_wrap} onClick={()=> {TransitHandler("/people")}}>
                    <h1 className={`${style.lovely_gb_icon} ${style.pm_remover}`}>
                        <BsFillArrowLeftCircleFill />
                    </h1>
                    <h1 className={`${style.lovely_gb_text} ${style.pm_remover}`}>
                        Go Back
                    </h1>
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