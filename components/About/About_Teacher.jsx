import style from "../../styles/components-css/About/About_Teacher.module.css"
import {
    FaChalkboardTeacher
} from "react-icons/fa"

const teacherList = [
    {
        name : "Kuri Asih, S.E., S.Kom.",
        image : "/teacher/bukuri.png"
    },
    {
        name : "Eva Yulizar, S.Kom.",
        image : "/teacher/bueva.png"
    },
    {
        name : "Danial Ahadian, M.Pd",
        image : "/teacher/pakdanial.png"
    },
    {
        name : "Samsul Bahri, S.Pd.",
        image : "/teacher/paksamsul.png"
    },
    {
        name : "Sevia Helena Kiranti, S.Kom.",
        image : "/teacher/busevia.png"
    }
]

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
    return (
        <div className={style.teacher_wrapper}>
            <div className={style.teacher_content}>
                <div className={style.teacher_top}>
                    <h1 className={`${style.teacher_title} ${style.pm_remover}`}>
                        Teachers
                    </h1>
                </div>
                <div className={style.teacher_bottom}>
                    <Teacher_Card data={teacherList}/>
                </div>
            </div>
        </div>
    )
}

export default About_Teacher;