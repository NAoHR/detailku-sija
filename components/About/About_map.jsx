import style from "../../styles/components-css/About/About_map.module.css";
import {useEffect} from "react";

const About_map = () => {
    function bulp(){
        const card = document.getElementsByClassName(style.vTourWrapper)[0];
        if(card){
            let card_top = card.getBoundingClientRect().top;
            let innerHeight = window.innerHeight;
            if(innerHeight > card_top){
                card.style = "transition: 1s;transform: translateX(0%);opacity: 1;"
            }else{
                card.style = "transition: 1s;transform: translateX(-15%);opacity: 0;"
            }
        }
    }

    useEffect(()=>{
        bulp();
        window.addEventListener("scroll",()=>{
            bulp()
        })
    },[])
    return (
        <>
        <div className={style.vTourWrapper}>
            <div className={`${style.poppins}`}>
                <h2 className={style.vt_text} >Sekilas Tentang Kami </h2>
            </div>
            <div className={style.flexit}>
                <iframe height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=smkn%2026%20jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className={`${style.vmap} ${style.brdr}`} ></iframe>
                <iframe className={`${style.vTour} ${style.brdr}`} src="https://app.lapentor.com/sphere/smkn-26-1602643278?scene=5f87dffda66d425c4c007d27" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
        </>
    )
}

export default About_map;