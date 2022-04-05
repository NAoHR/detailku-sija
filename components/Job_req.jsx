import style from "../styles/components-css/Job_Req.module.css";
import {FaCloud} from "react-icons/fa";
import { useRef,useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {reqJob} from "../utils/nesData"


const Job_Req_Lopper = ({data}) => {
    return data.map((val)=>{
        return (<span key={val.name}>
            <div className={style.reqrute_card}>
                <div className={`${style.left_dec} ${style.dec}`}>

                </div>
                <div className={`${style.right_dec} ${style.dec}`}>

                </div>
                <h1 className={`${style.reqrute_icon} pm_remover`}>
                    <FaCloud />
                </h1>
                <div className={style.text_side}>
                    <h2 className={`${style.reqrute_name} pm_remover`}>
                        {val.name}
                    </h2>
                    <a href={`https://api.whatsapp.com/send?phone=1122332211&text=Halo,%20saya%20ingin%20menawarkan / merekrut %20sebuah%20pekerjaan%20tentang%20${val.name != "Other" ? val.name : ""}`}>
                        <h2 className={`${style.reqrute_link} pm_remover`}>
                            Send Message
                        </h2>
                    </a>
                </div>
            </div>
        </span>)
    })
}

const Job_Req = () => {
    const ref = useRef();                 
    const { events } = useDraggable(ref); 
    function bulp(){
        const card = document.getElementsByClassName(style.reqrute_body)[0];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1s;transform: translateX(0%);opacity: 1;"
            }else{
                card.style = "transition: 1s;transform: translateX(15%);opacity: 0;"
            }
        }
    }
    useEffect(()=>{
        bulp()
        window.addEventListener("scroll",()=>{
            bulp()
        })
    },[])

    return (
        <div className={style.lovely_reqrute}>
            <div className={style.reqrute_decoration}></div>
            <div className={style.reqrute_text_side}>
                <h3 className={`${style.reqrute_text} pm_remover`}>
                    Tawarkan Pekerjaan atau Rekrut Kami
                </h3>
            </div>
            <div className={style.reqrute_body}  {...events} ref={ref} >
                <Job_Req_Lopper data={reqJob} />
            </div>
        </div>
    )
}

export default Job_Req;