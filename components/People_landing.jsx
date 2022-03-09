import { useRef,useEffect } from "react";
import style from "../styles/components-css/People_landing.module.css";

const People_landing = ({num, title,keyNum}) => {
    const stateRef = useRef(true)

    useEffect(()=>{
        window.addEventListener("scroll",(e)=>{
            let doc = document.getElementsByClassName(style.lovely_who_card)[Number(keyNum)].getBoundingClientRect().top;
            if(doc < window.innerHeight){
                if(stateRef.current){
                    console.log("here")
                    let counter = Number(num) > 200 ? Math.floor(Number(num) * (4/5)) : 0;
                    setInterval(()=>{
                        if(Number(num) > counter){
                            counter +=1
                            document.getElementsByClassName(style.lovely_card_num)[Number(keyNum)].innerHTML = counter
                        }
                        clearInterval();
                    },10)
                    stateRef.current = false;
                };
            }
            // console.log(statusT)
        })
    },[])
    return (
            <div className={style.lovely_who_card}>
                <img src="/user.svg" alt="" className={style.lovely_image_card} />
                <h1 className={style.lovely_card_num}>
                    0
                </h1>
                <h1 className={style.lovely_card_text}>
                    {title}
                </h1>
            </div>
    )
}

export default People_landing