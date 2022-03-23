import style from "../../styles/components-css/people/People_wrapper.module.css";
import People_card from "./People_card";
import { IoPeopleCircleSharp } from "react-icons/io5";

const People_Wrapper = ({data}) => {

    return (
        <>
        <div className={style.lovely_people_content}>
            <div className={style.lovely_people_text}>
                <h1 className={style.lovely_people_title}>
                    <span className={style.lovely_icon}><IoPeopleCircleSharp /></span> {data.grade}
                </h1>
                <div className={style.lovely_liner}></div>
            </div>
            <div className={style.lovely_people_card_wrapper}>
                {data.data.map((val,index)=>{
                    return <People_card data={val} key={index}/>
                })}
            </div>
        </div>
        </>
    )
}

export default People_Wrapper;