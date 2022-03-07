import style from "../styles/containers-css/Testing.module.css";
import Navbar from "../components/Navbar";
import People_landing from "../components/People_landing";
import Link from "next/link";

const Main = () => {
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
                            <div className={style.lovely_who_text_wrap}>
                                <div className={style.lovely_head_wrapper}>
                                    <h1 className={style.lovely_who_head}>
                                        Who We Are
                                    </h1>
                                    <div className={style.lovely_long_bar}>

                                    </div>
                                </div>
                                <p className={style.lovely_who_text}>
                                    Kami adalah jurusan Sistem Informatika Jaringan dan Aplikasi dengan program studi empat tahun yang memiliki perangkat penunjang yang memadai demi kenyamanan belajar dan mengajar
                                </p>
                            </div>
                        <div className={style.lovely_detail_who}>
                            <People_landing num="99" title="Jumlah Pendidik"/>
                            <People_landing num="99" title="Jumlah Kelas"/>
                            <People_landing num="99" title="Jumlah Murid"/>
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