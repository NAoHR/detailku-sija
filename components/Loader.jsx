import style from "../styles/components-css/Loader.module.css";

const Loader = ({status}) => {
    return(
        <>
        <div className={style.lovely_loader_wrapper} style={{
            height : status && "0vh",
            transition : "1.5s"
        }}>
            <div class={style.lovely_load_main} style={{
                transition : ".5s",
                opacity : status && "0"
            }}>
                <div className={style.lovely_load_perks}></div>
                <div className={style.lovely_load_perks}></div>
                <div className={style.lovely_load_perks}></div>
                <div className={style.lovely_load_perks}></div>
            </div>
        </div>
        </>
    )
}

export default Loader;