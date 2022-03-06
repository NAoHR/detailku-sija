import style from "../styles/components-css/PageWrapper.module.css";

const PageWrapper = (props) => {
    return (
        <>
        <div className={style.balls}></div>
        <div className={style.main_full}>
            {props.children}
        </div>
        </>
    )
}

export default PageWrapper