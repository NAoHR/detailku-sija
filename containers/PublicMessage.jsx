import style from "../styles/containers-css/PublicMessage.module.css";
import styleModal from "../styles/components-css/usable/Modal.module.css";
import { requestMethod } from "../utils/apiCaller";
import { toast } from "react-toastify";
import Navbar from "../components/Usable/Navbar";
import Footer from "../components/Usable/Footer";
import { useState, useRef, useEffect } from "react";
import ErrData from "../components/Usable/ErrorData";


const Wmw_Card = ({text, image}) => {
    return (
    <div className={style.wmw_card}>
        <div className={`${style.wmw_card_orange} b-light-orange`}>
            <img src={`/message/${image}.svg`} alt="" className={style.wmwc_image} />
        </div>
        <div className={`${style.wmwc_text} flex centerAll poppins c-black`}>
            {text}
        </div>
    </div>
    )
}


const AddPublicMessageModal = ({inputToggle, method, addNewMessage}) => {
    const nameElement = useRef();
    const messageElement = useRef();
    
    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");
        e.preventDefault();

        const body = {
            sender : nameElement.current.value === '' ? undefined : nameElement.current.value,
            message : messageElement.current.value
        }
        
        requestMethod.sendPublicMesage(body)
            .then((v) => {
                toast.update(loadToast, {render : "message added", type: "success", isLoading : false, autoClose : true })
                addNewMessage(v.data.data);
                inputToggle(false);
            })
            .catch((e) => {
                console.log(e);
                toast.update(loadToast, {render : e.response.data?.message || "something went wrong", type: "error", isLoading : false, autoClose : true})
            })
            .finally((e)=>{
                submitbtn.disabled = false;
            })
        
    }
    return (
        <>
            <div className={`${styleModal.black_screen} flex centerAll`} >
                <div className={`${styleModal.modal_form} b-white`}>
                    <div className={`${styleModal.modal_top} b-light-orange`}>
                        <div className={styleModal.mt_decor}></div>
                        <div className={styleModal.mt_decor}></div>
                        <div className={styleModal.mt_decor}></div>
                    </div>
                    <div className={styleModal.modal_bottom}>
                        <form
                        onSubmit={submitHandle}
                        method={method}
                        >
                            <div className={styleModal.form_content}>
                                <input 
                                autoComplete={"off"}
                                type="text" 
                                className={`${styleModal.input_modal} poppins`} 
                                name="name"
                                placeholder="Brandon"
                                ref={nameElement}
                                spellCheck={false} 
                                />

                                <textarea 
                                autoComplete={"off"}
                                className={`${styleModal.input_modal} poppins ${styleModal.longText}`} 
                                required={true}
                                name="message"
                                ref={messageElement}
                                spellCheck={false}
                                placeholder="Sija seru banget, banyak pengalaman yang gue dapet disini"
                                />
                            </div>

                            <button 
                            type="submit" 
                            className={`${styleModal.btn_modal} b-blue`}
                            id={"submit_modal"}
                            >submit</button>

                            <button className={`${styleModal.btn_modal} b-red`} onClick={()=>{inputToggle(false)}}> close</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}


const MessageCard = ({sender, message}) => {
    const colorList = ["#B1B2FF", "#FFB3B3", "#CDF0EA" , "#F4BFBF", "#F9CEEE"]
    
    return (
    <div className={style.messageCard}>
        <div className={style.mc_decor}></div>
        <div className={style.mc_main} style={{
            backgroundColor : colorList[Math.floor(Math.random() * colorList.length)]
        }}>
            <h4 className={`${style.mc_title} poppins c-black`}>
                {sender}
            </h4>
            <p className={`${style.mc_para} poppins c-black`}>
                {message}
            </p>
        </div>
    </div>
    )
}
const PublicMessage = ({ data }) => {
    const [publicMessage, setPM] = useState(data)
    const [modalPublicMessage, showMPM] = useState(false);

    function setPublicToRecentPost(post){
        setPM(publicMessage.concat(post));
    }

    return (
        <>
            <Navbar />
            {modalPublicMessage && <AddPublicMessageModal inputToggle={showMPM} addNewMessage={setPublicToRecentPost}/>}
            <section className={style.opening}>
                <div className={style.blurit}></div>
                <div className={`${style.openingText}`}>
                    <h2 className={`bebas ${style.opTitle} c-white`}>
                        Tuliskan pesan <br />yang ingin kamu sampaikan
                    </h2>
                    <div className={`${style.more} b-light-orange`} onClick={()=>{showMPM(!modalPublicMessage)}}>
                        <h2 className={`poppins c-black`}>
                            Mulai Menulis
                        </h2>
                    </div>
                </div>
            </section>
            <section className={`${style.whyMustWrite} absolute_width m-auto`}>
                <h2 className={`poppins c-black ${style.mht}`}>
                    Mengapa Anda Harus Menulis
                </h2>

                <div className={style.card_wrapper}>
                   <Wmw_Card text={"representasikan Diri Anda Secara Anonim"} image={"represent"}/>
                   <Wmw_Card text={"Sampaikan Pirkiran Anda Tentang Jurusan Kami"} image={"think"}/>
                   <Wmw_Card text={"Kami Menerima Kritik dan Saran Anda"} image={"suggest"} />
                    
                </div>
            </section>
            <section className={`${style.allLetter} absolute_width m-auto`}>
                <h2 className={`poppins c-black ${style.mht}`}>
                    Kumpulan Pesan
                </h2>
                <div className={style.card_wrapper}>
                    {
                        publicMessage.length === 0 && <ErrData message={"tidak ada data yang dapat ditampilkan"}/>
                    }
                    {
                        publicMessage.map((v) => {
                            return <MessageCard key={v._id} sender={v.sender} message={v.message} />
                        })
                    }
                </div>
            </section>
            <div className={`${style.decoration}`}>
                <div className={style.dec_dots}></div>
                <div className={style.dec_dots}></div>
                <div className={style.dec_dots}></div>
            </div>
            <Footer />
        </>
    )
}

export default PublicMessage