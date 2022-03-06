import { useEffect, useState } from "react";
import style from "../styles/components-css/PageWrapper.module.css";

const PageWrapper = (props) => {
    const [height,setHeight] = useState(false);
    const {pt, ch} = props
    useEffect(()=>{
        window.addEventListener("resize",() => {
            if(window.innerHeight >= 1024 && ch === "res"){
                setHeight(true);
            }else{
                setHeight(false)
            }
        })
    },[]);

    return (
        <>
        <div className={style.balls}></div>
        <div className={style.main_full} style={{
            "paddingTop" : pt ? pt : "0px",
            height : height? "1024px" : "100vh"
        }}>
            {props.children}
        </div>
        </>
    )
}

export default PageWrapper