import style from "../../styles/components-css/About/About_grade.module.css"
import { TransitContext } from "../../utils/Transition_Context"
import { useContext } from "react"
import {
    FaMapPin,FaSchool
} from "react-icons/fa"

const grade_data = [
    {
        title : "X SIJA 1",
        teacher : "EVA YULIZAR, S.KOM",
        imagePath : "X_SIJA_1.jpg"
    },
    {
        title : "X SIJA 2",
        teacher : "Dra. Derliana P. ",
        imagePath : "X_SIJA_2.jpg"
    },
    {
        title : "XI SIJA 1",
        teacher : "Sevia Helena Kiranti, S.Kom",
        imagePath : "XI_SIJA_1.jpeg"
    },
    {
        title : "XI SIJA 2",
        teacher : "Novita Andriani, S.E",
        imagePath : "XI_SIJA_2.jpeg"
    },
    {
        title : "XII SIJA 1",
        teacher : "Riaty, S.Pd.",
        imagePath : "XII_SIJA_1.jpg"
    },
    {
        title : "XII SIJA 2",
        teacher : "Aisyah Fatoni, M.Pd.",
        imagePath : "XII_SIJA_1.jpg"
    },
]

const GradeCard = ({data}) => {
    const TransitHandler = useContext(TransitContext);

    return data.map((val)=>{
        return (
            <div className={style.grade_card_wrapper} key={val.teacher}>
                <div className={style.card_icon}>
                    <h1 className={`${style.icon_school} ${style.pm_remover}`}>
                        <FaSchool />
                    </h1>
                </div>
                <div className={style.grade_card}>
                    <div className={style.grade_card_image}>
                        <img src={`/gradepict/${val.imagePath}`} alt="" className={style.image_card_grad} />
                    </div>
                    <div className={style.grade_card_perks}>
                        <h1 className={`${style.title_card} ${style.pm_remover}`}>
                            {val.title}
                        </h1>
                        <h2 className={`${style.title_teacher} ${style.pm_remover}`}>
                            {val.teacher}
                        </h2>
                        <div className={style.wrapper_detail} onClick={() => TransitHandler(`/people/${val.title.split(" ").join("_")}`)}>
                            <h2 className={`${style.title_more} ${style.pm_remover}`}>
                                more
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}


const About_grade = () => {
    return (
        <div className={style.each_grade_wrapper}>
            <div className={style.text_grade}>
                <h1 className={`${style.title_grade} ${style.pm_remover}`}>
                    A Glimpse <br />of our class
                </h1>
            </div>
            <div className={style.eachGrade_content}>
                <GradeCard data={grade_data}/>                
            </div>
        </div>
    )
}

export default About_grade;