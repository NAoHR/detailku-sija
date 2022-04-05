import style from "../../styles/components-css/About/About_Teacher.module.css"
import {
    FaChalkboardTeacher
} from "react-icons/fa"
import {useEffect} from "react"
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {teacherList} from "../../utils/nesData"

const Teacher_Card = ({data}) => {
    return data.map((val) => {
        return (<span key={val.name}>
            <div className={style.teacher_card}>
                <div className={style.teacher_card_top}>
                    <div className={style.card_decoration}>
                        <h3 className={`${style.icon_decoration} ${style.pm_remover}`}>
                            <FaChalkboardTeacher />
                        </h3>
                    </div>
                    <img src={val.image} alt="teacher" className={style.image_fit}/>
                </div>
                <div className={style.teacher_card_bottom}>
                    <h4 className={`${style.teacher_name} ${style.pm_remover}`}>
                        {val.name}
                    </h4>
                </div>
            </div> 
        </span>)
    })
}

const About_Teacher = () => {
    const ref = useRef();                 
    const { events } = useDraggable(ref);

    function bulp(){
        const card = document.getElementsByClassName(style.teacher_bottom)[0];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1s;transform: translateX(0%);opacity: 1;"
            }else{
                card.style = "transition: 1s;transform: translateX(-15%);opacity: 0;"
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
        <div className={style.teacher_wrapper}>
            <div className={style.teacher_content}>
                <div className={style.teacher_top}>
                    <h1 className={`${style.teacher_title} ${style.pm_remover}`}>
                        Guru Kami
                    </h1>
                </div>
                <div className={style.teacher_bottom} {...events} ref={ref}>
                    <Teacher_Card data={teacherList}/>
                </div>
            </div>
        </div>
    )
}

export default About_Teacher;