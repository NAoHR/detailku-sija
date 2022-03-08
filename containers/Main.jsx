import style from "../styles/containers-css/Main.module.css";
import Navbar from "../components/Navbar";
import People_landing from "../components/People_landing";
import Link from "next/link";
import { useRef,useEffect } from "react";

const Main = () => {
    const flexedStatus = useRef(true);

    function animate_flex_who() {
        const flexedPosition = document.getElementsByClassName(style.lovely_flexed_who)[0];
            if(flexedPosition.getBoundingClientRect().top < window.innerHeight){
                flexedPosition.style = "opacity:1;transition:1s;transform: translateY(0%);"
            }else{
                flexedPosition.style = "opacity:0;transition:1s;transform: translateY(10%);"
            }
    }

    useEffect(()=>{
        window.addEventListener("scroll",() => {
            animate_flex_who();
        })
    })
    return (
        <>
            <Navbar />
            <div className={style.lovely_wrapper}>
                <div className={style.lovely_divider}>
                    <div className={`${style.lovely_left} ${style.lovely_z_index}`}>
                        <h1 className={`${style.lovely_main_text} ${style.lovely_z_index}`}>
                            <span className={style.lovely_orange}>sija</span> smkn negeri 26 <br/> Jakarta
                        </h1>
                        <p className={`${style.lovely_p_text} ${style.lovely_z_index}`}>Belajar, Bekerja, membangun dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keihklasan agar bisa mencapai kejayaan di masa depan</p>
                        <div className={`${style.lovely_explore_wrapper} ${style.lovely_z_index}`}>
                            <Link href="https://youtu.be/dQw4w9WgXcQ">
                                <a>        
                                    <h1 className={style.lovely_explore_text}>explore</h1>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.lovely_right}>
                        <img src="/sija_logo.png" alt="logo_sija.png" className={`${style.lovely_image_logo} ${style.lovely_z_index}`}/>
                    </div>
                </div>
            </div>
            <div className={`${style.lovely_who_wrapper} ${style.lovely_who}`}>
                <div className={style.lovely_detail_wrapper}>
                    <div className={style.lovely_who_ball}>
                    </div>
                    <div className={style.lovely_flexed_who}>
                        <img src="/3circle.svg" alt="circle" className={style.lovely_circle} />
                            <div className={style.lovely_who_text_wrap}>
                                <div className={style.lovely_head_wrapper}>
                                    <h1 className={style.lovely_who_head}>
                                        Who We Are
                                    </h1>
                                    <div className={style.lovely_long_bar}>

                                    </div>
                                </div>
                                <p className={style.lovely_who_text}>
                                    Jurusan Sistem Informatika Jaringan dan Aplikasi dengan program studi empat tahun yang memiliki perangkat penunjang memadai untuk program belajar dan mengajar
                                </p>
                            </div>
                        <div className={style.lovely_detail_who}>
                            <People_landing num="99" title="Jumlah Pendidik" keyNum="0" />
                            <People_landing num="1000" title="Jumlah Kelas" keyNum="1" />
                            <People_landing num="200" title="Jumlah Murid" keyNum="2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.absolute_lovely_ball}>

            </div>
        </>
    )
}

export default Main;