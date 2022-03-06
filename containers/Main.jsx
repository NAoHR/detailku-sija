import Navbar from "../components/Navbar";
import Balls from "../components/Balls";
import style from "../styles/containers-css/Main.module.css";
import Link from "next/link";

const Main = () => {
    return (
        <>
        <Navbar />
        <div className={style.main_wrapper}>
            <Balls />
            <div className={style.main_content_opener}>
                    <div className={style.left_side}>
                        <h1 className={style.main_text}>
                            <span className={style.orange}>sija</span> smkn negeri 26 <br/> Jakarta
                        </h1>
                        <p className={style.p_text}>Belajar, Bekerja, membangun dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keihklasan agar bisa mencapai kejayaan di masa depan</p>
                        <div className={style.explore_wrapper}>
                            <Link href="https://youtu.be/dQw4w9WgXcQ">
                                <a>        
                                    <h1 className={style.explore_text}>explore</h1>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.right_side}>
                        <img src="/sija_logo.png" alt="logo_sija.png" className={style.image_logo}/>
                    </div>
            </div>
        </div>
        {/* <PageWrapper pt="60px" ch="res">
        </PageWrapper> */}
        </>
    )
}

export default Main;