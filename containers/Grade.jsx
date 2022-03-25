import style from "../styles/containers-css/Grade.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeCard from "../components/people/GradeCard";

const GradeCard_looper = ({data}) => {
    return data.map((val,index) => {
        return <GradeCard creds={val} key={index}/>
    })
}

const Grade_Main = ({eachdata}) => {

    return (
        <>
            <Navbar />
            <div className={style.lovely_grade_wrapper}>
                {eachdata.length > 0 ? <GradeCard_looper data={eachdata} /> : "zan"}
            </div>
            <Footer />
        </>
    )
}

export default Grade_Main;