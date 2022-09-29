import style from "../styles/containers-css/Dashboard.module.css";
import styleModal from "../styles/components-css/usable/Modal.module.css"
import Navbar from "../components/Usable/Navbar";
import Footer from "../components/Usable/Footer";
import Link from "next/link";
import ErrData from "../components/Usable/ErrorData";

import {
    FaLink,FaInstagramSquare,FaLinkedin,FaGithubSquare,FaCertificate,FaChartBar,FaTools,FaCompass,FaPen,FaEnvelope
} from "react-icons/fa";
import {
    AiFillMessage
} from "react-icons/ai";

import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import CustomLink from "../utils/Custom_link";
import { requestMethod } from "../utils/apiCaller";

const Project_Card = ({subdata}) => {

    return (
        <>  
            <div className={style.lovely_pcs_card}>
                <div className={style.lovely_pcs_icon_side}>
                    <h2 className={`${style.pcs_icon} ${style.pm_remover}`}>
                        <FaTools />
                    </h2>
                </div>
                <div className={style.pcs_text_side}>
                    <div className={style.title_pcs_side}>
                        <h1 className={`${style.pcs_title} ${style.pm_remover}`}>
                            {subdata.name}
                        </h1>
                        <h2 className={`${style.cert_ID} ${style.pm_remover}`}>
                            {subdata.description}
                        </h2>
                        <Link href={subdata.link}>
                            <a>
                                <h2 className={`${style.cert_link} ${style.pm_remover}`}>
                                    <span style={{
                                        fontSize : ".8em",
                                        marginRight: ".4rem"
                                    }}>
                                        <FaLink />
                                    </span>
                                     More Detail
                                </h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const Skill_Card = ({subdata}) => {
    return (
        <div className={style.lovely_pcs_card}>
            <div className={style.lovely_pcs_icon_side}>
                <h2 className={`${style.pcs_icon} ${style.pm_remover}`}>
                    <FaChartBar />
                </h2>
            </div>
            <div className={style.pcs_text_side}>
                <div className={style.title_pcs_side}>
                    <h1 className={`${style.pcs_title} ${style.pm_remover}`}>
                        {subdata.skillName}
                        <span className={style.percentage_title}>
                            {subdata.percentage}%
                        </span>
                    </h1>
                </div>
                <div className={style.percentage_wrapper}>
                    <div className={style.percentage_filler} style={{
                        width : `${subdata.percentage}%`
                    }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

const Cert_Card = ({subdata}) => {

    return (
        <>  
            <div className={style.lovely_pcs_card}>
                <div className={style.lovely_pcs_icon_side}>
                    <h2 className={`${style.pcs_icon} ${style.pm_remover}`}>
                        <FaCertificate />
                    </h2>
                </div>
                <div className={style.pcs_text_side}>
                    <div className={style.title_pcs_side}>
                        <h1 className={`${style.pcs_title} ${style.pm_remover}`}>
                            {subdata.title}
                        </h1>
                        <h2 className={`${style.cert_ID} ${style.pm_remover}`}>
                            {subdata.certID}
                        </h2>
                        <h2 className={`${style.cert_org} ${style.pm_remover}`}>
                            {subdata.organizer}
                        </h2>
                        <Link href={subdata.certLink}>
                            <a>
                                <h2 className={`${style.cert_link} ${style.pm_remover}`}>
                                    <span style={{
                                        fontSize : ".8em",
                                        marginRight: ".4rem"
                                    }}>
                                        <FaLink />
                                    </span>
                                     More Detail
                                </h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const Card_Looper = ({data, type}) => {
    if(data.length == 0){
        return <ErrData message={`no ${type} yet`} dashboard={true}/>
    }
    return data.map((val,index)=>{
        switch (type) {
            case "certificate":
                return <Cert_Card subdata={val} key={index}/>
            case "project":
                return <Project_Card subdata={val} key={index} />
            case "skill":
                return <Skill_Card subdata={val} key={index} />
        }
    })
}


const AddPrivateModal = ({inputToggle, method, id}) => {
    const nameElement = useRef();
    const emailElement = useRef();
    const messageElement = useRef();
    
    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        e.preventDefault();

        const body = {
            from : nameElement.current.value,
            email: emailElement.current.value,
            message : messageElement.current.value
        }
        submitbtn.disabled = true;

        requestMethod.sendprivateMesage(id,body)
            .then((v) => {
                toast.update(loadToast, {render : "message added", type: "success", isLoading : false, autoClose : true })
                inputToggle(false)
            })
            .catch((e) => {
                const {message} = e.response.data;
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
                                required={true}
                                placeholder="Brandon"
                                ref={nameElement}
                                spellCheck={false} 
                                />
                                <input 
                                type="text" 
                                autoComplete={"off"}
                                className={`${styleModal.input_modal} poppins`} 
                                name="email"
                                required={true}
                                ref={emailElement}
                                placeholder="Brandon@gmail.com" 
                                spellCheck={false} />

                                <textarea 
                                autoComplete={"off"}
                                className={`${styleModal.input_modal} poppins ${styleModal.longText}`} 
                                required={true}
                                name="message"
                                ref={messageElement}
                                spellCheck={false}
                                placeholder="hi 👋, i am interested in your project"
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

const User_Main = ({data}) => {
    const [messageModal, setMM] = useState(false);
    const [activeState,setAS] = useState("project");
    const name = data.name.split(" ")
    const picture = data.detail.picture
    return (
        <>
            {messageModal && <AddPrivateModal inputToggle={setMM} method="post" id={data._id} /> }
            <Navbar />
            <div className={style.lovely_go_back}>
                <CustomLink path={`/people/${data.grade}`}>
                    <div className={style.lovely_gb_wrap}>
                        <h1 className={`${style.lovely_gb_icon} ${style.pm_remover} ${style.lighten_black}`}>
                            <BsFillArrowLeftCircleFill />
                        </h1>
                        <h1 className={`${style.lovely_gb_text} ${style.pm_remover} ${style.lighten_black}`}>
                            Kembali
                        </h1>
                    </div>
                </CustomLink>
            </div>
            <div className={style.lovely_user_wrapper}>
                <div className={style.lovely_top_user}>
                    <p className={`${style.lovely_message_me} c-black`} onClick={()=>{setMM(!messageModal)}}>
                        <AiFillMessage />
                    </p>
                    <div className={style.lovely_topt_user}>
                        <div className={style.image_side}>
                            {
                                picture === undefined ?
                                <h2 className={`${style.profile_pict_text} ${style.pm_remover}`} >
                                    {name.length == 1 ? name[0].slice(0,1).toUpperCase() : `${name[0].slice(0,1).toUpperCase()}${name[name.length-1].slice(0,1).toUpperCase()}`}
                                </h2> :
                                <img src={picture} alt="userimage" className={style.lovely_image}/>
                            }
                        </div>
                    </div>
                    <h1 className={`${style.lovely_username} ${style.pm_remover}`} style={{
                        fontSize: "1.5em",
                        paddingTop: "2rem",
                        opacity : "1"
                    }}>
                        {data.name}
                    </h1>
                    <h1 className={`${style.lovely_username} ${style.pm_remover}`} style={{
                        fontSize: ".8em"
                    }}>
                        @{data.username}
                    </h1>
                    <div className={style.lovely_topb_user}>
                        <div className={style.description_side}>
                            <p className={`${style.lovely_description} ${style.pm_remover}`}>
                            {data.detail.description}
                            </p>
                        </div>
                        <Link href={data.detail.web}>
                            <a>
                                <p className={`${style.lovely_link} ${style.pm_remover}`}>
                                    <span className={style.lovely_gap}>
                                        <FaLink/>
                                    </span>
                                    Tentang saya
                                </p>
                            </a>
                        </Link>
                        <div className={style.social_Media}>
                            <Link href="https://instagram.com">
                                <a>
                                    <h3 className={`${style.user_social} ${style.pm_remover}`}>
                                        <FaInstagramSquare />
                                    </h3>
                                </a>
                            </Link>
                            <Link href={data.detail.linkedin}>
                                <a>
                                    <h3 className={`${style.user_social} ${style.pm_remover}`}>
                                        <FaLinkedin />
                                    </h3>
                                </a>
                            </Link>
                            <Link href={data.detail.github}>
                                <a>
                                    <h3 className={`${style.user_social} ${style.pm_remover}`}>
                                        <FaGithubSquare />
                                    </h3>
                                </a>
                            </Link>
                            <Link href={`mailto:${data.detail.email}`}>
                                <a>
                                    <h3 className={`${style.user_social} ${style.pm_remover}`}>
                                        <FaEnvelope />
                                    </h3>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.lovely_bottom_user}>
                    <div className={style.event_selector}>
                        <div className={style.event_perks} onClick={()=> setAS("project")} style={{
                            borderBottom : `${ activeState == "project" ? "4px" : "0px"} solid var(--black)`
                        }}>
                            <h3 className={`${style.perks_icon} ${style.pm_remover}`} >
                                <FaTools />
                            </h3>
                        </div>
                        <div className={style.event_perks} onClick={()=> setAS("cert")} style={{
                            borderBottom : `${ activeState == "cert" ? "4px" : "0px"} solid var(--black)`
                        }}>
                            <h3 className={`${style.perks_icon} ${style.pm_remover}`}>
                                <FaCertificate />
                            </h3>
                        </div>
                        <div className={style.event_perks} onClick={()=> setAS("skill")} style={{
                            borderBottom : `${ activeState == "skill" ? "4px" : "0px"} solid var(--black)`
                        }}>
                            <h3 className={`${style.perks_icon} ${style.pm_remover}`}>
                                <FaChartBar />
                            </h3>
                        </div>
                    </div>
                    {activeState == "project" && <Card_Looper type={"project"} data={data.project} />}
                    {activeState == "skill" && <Card_Looper type={"skill"} data={data.skill} />}
                    {activeState == "cert" && <Card_Looper type={"certificate"} data={data.certificate} />}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default User_Main;