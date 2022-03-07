import style from "../styles/components-css/People_landing.module.css";

const People_landing = ({num, title}) => {
    return (
            <div className={style.lovely_who_card}>
                <img src="/user.svg" alt="" className={style.lovely_image_card}/>
                <h1 className={style.lovely_card_num}>
                    {num}
                </h1>
                <h1 className={style.lovely_card_text}>
                    {title}
                </h1>
            </div>
    )
}

export default People_landing