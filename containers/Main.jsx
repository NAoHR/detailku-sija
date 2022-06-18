import style from "../styles/containers-css/Main.module.css";
import Navbar from "../components/Navbar";
import People_landing from "../components/Main/People_landing";
import Footer from "../components/Footer";
import Subject_card from "../components/Main/Subject_card";
import AchievedCard from "../components/Main/AchievedCard";
import CustomLink from "../utils/Custom_link";
import {subjects,achieved_card} from "../utils/nesData"
import {
    FaLightbulb
} from "react-icons/fa"
import {useEffect} from "react";


const Main = () => {
    function animate_flex_who() {
        const flexedPosition = document.getElementsByClassName(style.lovely_flexed_who)[0];
        if(flexedPosition){
            let innerheight = window.innerHeight
            let boundTop = flexedPosition.getBoundingClientRect().top;
            if(innerheight > boundTop){
                flexedPosition.style = "opacity:1;transition:1.3s;transform: translateY(0%);"
            }else{
                flexedPosition.style = "opacity:0;transition:1.3s;transform: translateY(50px);"
            }
        }
    }

    useEffect(function(){
        animate_flex_who();

        window.addEventListener("scroll",function(){
            animate_flex_who();
        })
    })
    return (
        <>
            <Navbar />
            <div className={style.lovely_all_wrapper}>
                <div className={style.lovely_wrapper}>
                    <div className={style.lovely_divider}>
                        <div className={`${style.lovely_left} ${style.lovely_z_index}`}>
                            <h1 className={`${style.lovely_main_text} ${style.lovely_z_index}`}>
                                <span className={style.lovely_orange}>sija</span> smk negeri 26 <br/> Jakarta
                            </h1>
                            <p className={`${style.lovely_p_text} ${style.lovely_z_index}`}>Belajar, Bekerja, membangun dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keihklasan agar bisa mencapai kejayaan di masa depan</p>
                            <div className={`${style.lovely_explore_wrapper} ${style.lovely_z_index}`}>
                                <CustomLink path={"/about"}>
                                    <h1 className={style.lovely_explore_text}>Jelajahi</h1>
                                </CustomLink>
                            </div>
                        </div>
                        <div className={style.lovely_right}>
                            <img src="/sija_logo.png" alt="logo_sija.png" className={`${style.lovely_image_logo} ${style.lovely_z_index}`}/>
                        </div>
                    </div>
                </div>
                <div className={style.absolute_lovely_ball}></div>
                <div className={`${style.lovely_who_wrapper} ${style.lovely_who}`}>
                    <div className={style.lovely_detail_wrapper}>
                        <div className={style.lovely_who_ball}>
                        </div>
                        <div className={style.lovely_flexed_who}>
                            <img src="/3circle.svg" alt="circle" className={style.lovely_circle} />
                                <div className={style.lovely_who_text_wrap}>
                                    <div className={style.lovely_head_wrapper}>
                                        <h1 className={style.lovely_who_head}>
                                            Kami Adalah
                                        </h1>
                                        <div className={style.lovely_long_bar}>

                                        </div>
                                    </div>
                                    <p className={style.lovely_who_text}>
                                        Jurusan Sistem Informatika Jaringan dan Aplikasi dengan program studi empat tahun yang memiliki perangkat penunjang memadai untuk program belajar dan mengajar
                                    </p>
                                </div>
                            <div className={style.lovely_detail_who}>
                                <People_landing num="5" title="Jumlah Pendidik" keyNum="0" />
                                <People_landing num="206" title="Jumlah Murid" keyNum="1" />
                                <People_landing num="9" title="Jumlah Pelajaran" keyNum="2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.lovely_wwha}>
                    <div className={style.lovely_wwha_main}>
                        <div className={`${style.lovely_wwha_head_wrap}`}>
                            <h1 className={style.lovely_wwha_head}>
                                Sekilas Tentang Pencapaian
                            </h1>
                            <div className={style.lovely_wwha_line}>

                            </div>
                        </div>
                        <div className={style.lovely_wwha_content}>
                            {
                                achieved_card["highlight"].map((val,index)=>{
                                    return <AchievedCard detail={val} key={index} num={index}/>
                                })
                            }
                        </div>
                        <div className={style.lovely_wwha_ball}>
                        </div>
                    </div>
                </div>
                <div className={style.lovely_subjects_side}>
                    <div className={style.lovely_subject_text_side}>
                        <h1 className={style.lovely_subject_head}>
                            Mata Pelajaran
                        </h1>
                        <div className={style.lovely_subject_line}>

                        </div>
                    </div>
                    <div className={style.lovely_subject_content}>
                        {
                            subjects.map((val,index) => {
                                return <Subject_card title={val.title} desc={val.content} key={val.title.split(" ").join("-")} index={index}/>
                            })
                        }
                    </div>
                </div> 
                <div className={style.lovely_quote_side}>
                        <div className={style.lovely_main_quote}>
                            <h1 className={style.lovely_quote_icon}>
                                <FaLightbulb />
                            </h1>
                            <h1 className={style.lovely_quote_text}>
                                Education is not to be viewed as something like filling a vessel with water but, rather, assisting a flower to grow in its own way
                            </h1>
                            <h2 className={style.lovely_quote_by}>
                                Bertrand Russell
                            </h2>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main;