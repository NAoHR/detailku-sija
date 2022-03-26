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
            <div className={style.lovely_grade_wrapper} style={{
                padding : eachdata.length == 0 && "0px 6px 0px 6px;",
                minHeight: eachdata.length == 0 && "100vh"
            }}>
                <GradeCard_looper data={eachdata} />
            </div>
            <Footer />
        </>
    )
}

export default Grade_Main;