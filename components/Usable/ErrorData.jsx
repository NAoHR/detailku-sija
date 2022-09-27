import {BiErrorCircle} from "react-icons/bi"
import style from "../../styles/components-css/usable/ErrorData.module.css"

const ErrData = ({message, dashboard}) => {
    return (
        <>
            <div className={style.lovely_errMessage} style={{
                minHeight : `${dashboard ? "300px" : "100%"}`
            }}>
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

export default ErrData;