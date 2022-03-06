import style from "../styles/containers-css/Testing.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className={style.lovely_welcoming}>
                <div className={style.lovely_divider}>
                    <div className={style.lovely_left}>
                        <h1 className={style.lovely_main_text}>
                            <span className={style.lovely_orange}>sija</span> smkn negeri 26 <br/> Jakarta
                        </h1>
                        <p className={style.lovely_p_text}>Belajar, Bekerja, membangun dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keihklasan agar bisa mencapai kejayaan di masa depan</p>
                        <div className={style.lovely_explore_wrapper}>
                            <Link href="https://youtu.be/dQw4w9WgXcQ">
                                <a>        
                                    <h1 className={style.lovely_explore_text}>explore</h1>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.lovely_right}>
                        <img src="/sija_logo.png" alt="logo_sija.png" className={style.lovely_image_logo}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;