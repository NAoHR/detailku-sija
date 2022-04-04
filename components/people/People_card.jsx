import style from "../../styles/components-css/people/People_card.module.css";
import {IoSchool} from "react-icons/io5";
import { TransitContext } from "../../utils/Transition_Context";
import {useContext} from "react"
import CustomLink from "../../utils/Custom_link";

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
                    <CustomLink path={`/people/${data.subgrade.split(" ").join("_")}`}>
                        <h3 className={style.lovely_more_text}>
                            Lebih Lanjut
                        </h3>
                    </CustomLink>
                </div>
            </div>
        </div>
    )
}

export default People_card;