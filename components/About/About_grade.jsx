import style from "../../styles/components-css/About/About_grade.module.css"
import CustomLink from "../../utils/Custom_link"

import {
    FaSchool
} from "react-icons/fa"
import { useEffect } from "react"

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

const GradeCard = ({data,index}) => {
    function bulp(){
        const card = document.getElementsByClassName(style.grade_card_wrapper)[Number(index)];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1s;transform: translateY(0%);opacity: 1;"
            }else{
                card.style = "transition: 1s;transform: translateY(15%);opacity: 0;"
            }
        }
    }
    useEffect(()=>{
        bulp();
        window.addEventListener("scroll",()=>{
            bulp()
        })
    })
    return (
        <div className={style.grade_card_wrapper}>
            <div className={style.card_icon}>
                <h1 className={`${style.icon_school} ${style.pm_remover}`}>
                    <FaSchool />
                </h1>
            </div>
            <div className={style.grade_card}>
                <div className={style.grade_card_image}>
                    <img src={`/gradepict/${data.imagePath}`} alt="" className={style.image_card_grad} />
                </div>
                <div className={style.grade_card_perks}>
                    <h1 className={`${style.title_card} ${style.pm_remover}`}>
                        {data.title}
                    </h1>
                    <h2 className={`${style.title_teacher} ${style.pm_remover}`}>
                        {data.teacher}
                    </h2>
                    <CustomLink path={`/people/${data.title.split(" ").join("_")}`}>
                        <div className={style.wrapper_detail}>
                            <h2 className={`${style.title_more} ${style.pm_remover}`}>
                                more
                            </h2>
                        </div>
                    </CustomLink>
                </div>
            </div>
        </div>
    )
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
                {
                grade_data.map((val,index)=>{
                    return <GradeCard data={val} key={val.teacher} index={index}/>
                })
                }
            </div>
        </div>
    )
}

export default About_grade;