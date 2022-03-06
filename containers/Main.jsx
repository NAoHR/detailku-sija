import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import style from "../styles/containers-css/Main.module.css";

const Main = () => {
    return (
        <>
        <Navbar />
        <PageWrapper pt="60px" ch="res">
            <div className={style.main_content_opener}>
                    <div className={style.left_side}>
                        <h1 className={style.main_text}>
                            <span className={style.orange}>smk</span> negeri 26 <br/> Jakarta
                        </h1>
                        <p className={style.p_text}>Belajar, Bekerja, membangun dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keihklasan agar bisa mencapai kejayaan di masa depan</p>
                        <div className={style.explore_wrapper}>

                        </div>
                    </div>
                    <div className={style.right_side}>
                        <img src="/sija_logo.png" alt="logo_sija.png" className={style.image_logo}/>
                    </div>
            </div>
        </PageWrapper>
        </>
    )
}

export default Main;