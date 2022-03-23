import { useRef,useEffect } from "react";
import style from "../styles/components-css/People_landing.module.css";

const People_landing = ({num, title,keyNum}) => {
    const stateRef = useRef(true)

    useEffect(function(){
        window.addEventListener("scroll",function(e){
            let doc = document.getElementsByClassName(style.lovely_who_card)[Number(keyNum)];
            if(doc){
                doc = doc.getBoundingClientRect().top
                if(doc < window.innerHeight){
                    if(stateRef.current){
                        let counter = Number(num) > 200 ? Math.floor(Number(num) * (4/5)) : 0;
                        setInterval(()=>{

                            if(Number(num) > counter){
                                counter +=1
                                let card = document.getElementsByClassName(style.lovely_card_num)[Number(keyNum)]
                                if(card){
                                    card.innerHTML = counter
                                }
                            }
                            clearInterval();

                        },Number(num) > 100 ? 50 : 90)
                        stateRef.current = false;
                    };
                }
            }
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