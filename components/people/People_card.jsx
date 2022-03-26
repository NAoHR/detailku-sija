import style from "../../styles/components-css/people/People_card.module.css";
import Link from "next/link"
import {IoSchool} from "react-icons/io5";
import { TransitContext } from "../../utils/Transition_Context";
import {useContext} from "react"

const People_card = ({data}) => {
    const TransitHandler = useContext(TransitContext)
    return (
        <div className={style.lovely_peps_card}>
            <div className={style.lovely_peps_top}>
                <div className={style.lovely_peps_content}>
                    <h2 className={style.lovely_peps_subGrade}>
                        {data.subgrade}
                    </h2>
                    <h2 className={style.lovely_peps_count}>
                        {data.count}
                    </h2>
                </div>
                <div className={`${style.lovely_peps_dec_left} ${style.lovely_absoluted}`}></div>
                <div className={`${style.lovely_peps_dec_right} ${style.lovely_absoluted}`}></div>
            </div>
            <div className={style.lovely_peps_bottom}>
                <h3 className={style.lovely_icon}>
                    <IoSchool />
                </h3>
                <div className={style.lovely_more_side}>
                    <h3 className={style.lovely_more_text} onClick={()=> TransitHandler(`people/grade/${data.subgrade.split(" ").join("_")}`)}>
                        more
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default People_card;