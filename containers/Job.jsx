import style from "../styles/containers-css/Job.module.css";
import Job_Card from "../components/Job_Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import {BiErrorCircle} from "react-icons/bi"
import {
    FaBriefcase,FaSearch
} from "react-icons/fa";
import {useState} from "react";

const ErrJob = ({message}) => {
    return (
        <>
            <div className={style.lovely_errMessage}>
                <h1 className={`${style.lovely_errmessage_text} ${style.lovely_big_icon}`}>
                    <BiErrorCircle />
                </h1>
                <h1 className={style.lovely_errmessage_text}>
                    {message}
                </h1>
            </div>
        </>
    )
}

const MapData = ({data}) => {
    if(typeof data === "object"){
        if(data.length > 0){
            return data.map((val,index) => {
                return <Job_Card key={index} card_detail={val}/>
            })
        }
        return <ErrJob message={"No Data To Be Displayed"}/>
    }
    return <ErrJob message={"Something Went Wrong"}/>
}

const Job  = (props) => {
    const {data} = props;
    const [tobeDislayedData,setTBDD] = useState(data);

    function HandleSubmit(e){
        e.preventDefault();
        if(typeof data === "object"){
            let filteredData = data.filter((item) => {
                let vall = e.target.value
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
            <div className={style.lovely_top_wrapper}>
                <div className={`${style.lovely_top_content} ${style.zindex}`}>
                    <div className={style.lovely_top_text}>
                        <h1 className={style.lovely_top_head}>
                            <span className={style.bigger}><FaBriefcase /></span> <br/>Find A job<br />that Suits You
                        </h1>
                        <h3 className={style.lovely_top_offer}>
                            Or maybe offer it
                        </h3>
                    </div>
                </div>
                
                <div className={style.lovely_decorations}></div>
            </div>
            <div className={style.lovely_bottom_wrapper}>
                <div className={style.lovely_bottom_content}>
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
            <Footer />
        </>
    )
}

export default Job;