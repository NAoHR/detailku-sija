import style from "../styles/containers-css/Job.module.css";
import Job_Card from "../components/Job_Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ErrData from "../components/ErrorData";
import Job_Req from "../components/Job_req";
import {
    FaBriefcase,FaSearch
} from "react-icons/fa";
import {useState} from "react";

const MapData = ({data}) => {
    if(typeof data === "object"){
        if(data.length > 0){
            return data.map((val,index) => {
                return <Job_Card key={index} card_detail={val} index={index}/>
            })
        }
        return <ErrData message={"Data Yang Kamu Cari Tidak Ada"}/>
    }
    return <ErrData message={"Terjadi Kesalahan Internal"}/>
}

const Job  = ({data}) => {
    const [tobeDislayedData,setTBDD] = useState(data);

    function HandleSubmit(e){
        e.preventDefault();
        if(typeof data === "object"){
            let filteredData = data.filter((item) => {
                let vall = e.target.value.toLowerCase();
                if(
                    item.title.toLowerCase().indexOf(vall) != -1      ||
                    item.reqruiter.toLowerCase().indexOf(vall) != -1  ||
                    item.region.toLowerCase().indexOf(vall) != -1     ||
                    item.category.toLowerCase().indexOf(vall) != -1
                ){
                    return item
                }
            })
            setTBDD(filteredData);
        }
    }
    return (
        <>
            <Navbar />
            <div className={style.lovely_wrapper}>
                <div className={style.lovely_top_wrapper}>
                    <div className={`${style.lovely_top_content} ${style.zindex}`}>
                        <div className={style.lovely_top_text}>
                            <h1 className={style.lovely_top_head}>
                                <span className={style.bigger}><FaBriefcase /></span> <br/>Temui Pekerjaan<br />Sesuai Kemampuan
                            </h1>
                            <h3 className={style.lovely_top_offer}>
                                Atau mungkin Rekrut Kami
                            </h3>
                        </div>
                    </div>
                    
                    <div className={style.lovely_decorations}></div>
                </div>
                <div className={style.lovely_bottom_wrapper}>
                    <div className={style.lovely_bottom_content}>
                        <Job_Req />
                        <div className={style.lovely_search_bar_wrapper}>
                            <div className={style.lovely_search_bar}>
                                <input type="text" name="val" id={style.lovely_input} className={style.lovely_form_variant} autoComplete="off" placeholder="front-end developer" onChange={HandleSubmit} />
                                <button type="submit" id={style.lovely_button} className={style.lovely_form_variant}>
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                        <div className={style.lovely_bottom_card_wrapper}>
                            <MapData data={tobeDislayedData}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Job;
