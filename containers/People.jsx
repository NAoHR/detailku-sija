import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "../styles/containers-css/People.module.css";
import People_Wrapper from "../components/people/People_wrapper";
import ErrData from "../components/ErrorData";

const People = ({data}) => {
    return <>
        <Navbar />
            <div className={style.lovely_people_wrapper} style={{
                padding : data === false ? "0px" : "0px 5px 90px 5px"
            }}>
                {data === false ? <ErrData message={"Gagal Dalam Mengambil Data"}/> : data.map((val,index)=>{
                    return <People_Wrapper data={val} key={index}/>
                })}
            </div>
        <Footer />
    </>
}

export default People