import { useRouter } from "next/dist/client/router";
import { useContext, useState} from "react";
import Footer from "../components/Usable/Footer";
import ErrData from "../components/Usable/ErrorData";
import { AuthContext } from "../utils/AuthContext";
import style from "../styles/containers-css/Dashboard.module.css";
import ProjectModal from "../components/Dashboard/ProjectModal";
import Link from "next/dist/client/link";
import DashboardNav from "../components/Dashboard/DashboardNav";
import CertModal from "../components/Dashboard/CertModal";
import SkillModal from "../components/Dashboard/SkillModal";
import PrivateMessage from "../components/Dashboard/PrivateMessage";

import {
    FaLink,FaInstagramSquare,
    FaLinkedin,FaGithubSquare,
    FaCertificate,FaChartBar,
    FaTools, FaEdit,
    FaEnvelope,FaTrash
} from "react-icons/fa";


const Project_Card = ({subdata}) => {
    const {state , dispatch} = useContext(AuthContext);

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
                        <div className={`${style.delditButton} flex`}>
                            <h3 className="c-green" onClick={() => {
                                dispatch({
                                    type : "ChangeProjectState",
                                    payload : {
                                        display : true,
                                        type: "edit",
                                        id: state.project[state.project.findIndex(d => d._id === subdata._id)]
                                    }
                                })
                            }}>
                                <FaEdit />
                            </h3>
                            <h3 className="c-red" onClick={() => {
                                dispatch({
                                    type : "ChangeProjectState",
                                    payload : {
                                        display : true,
                                        type: "delete",
                                        id: subdata._id,
                                    }
                                })
                            }}>
                                <FaTrash />
                            </h3>
                        </div>
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
    const {state, dispatch} = useContext(AuthContext);
    return (
        <div className={style.lovely_pcs_card}>
            <div className={style.lovely_pcs_icon_side}>
                <h2 className={`${style.pcs_icon} ${style.pm_remover}`}>
                    <FaChartBar />
                </h2>
            </div>
            <div className={style.pcs_text_side}>
                <div className={style.title_pcs_side}>
                    <div className={`${style.delditButton} flex`}>
                        <h3 className="c-green" onClick={() => {
                            dispatch({
                                type : "ChangeSkillState",
                                payload : {
                                    display : true,
                                    type: "edit",
                                    id: state.skill[state.skill.findIndex(d => d._id === subdata._id)]
                                }
                            })
                        }}>
                            <FaEdit />
                        </h3>
                        <h3 className="c-red" onClick={() => {
                            dispatch({
                                type : "ChangeSkillState",
                                payload : {
                                    display : true,
                                    type: "delete",
                                    id: subdata._id,
                                }
                            })
                        }}>
                            <FaTrash />
                        </h3>
                    </div>
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
    const {state , dispatch} = useContext(AuthContext);

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
                        <div className={`${style.delditButton} flex`}>
                            <h3 className="c-green" onClick={() => {
                                dispatch({
                                    type : "ChangeSertiState",
                                    payload : {
                                        display : true,
                                        type: "edit",
                                        id: state.certificate[state.certificate.findIndex(d => d._id === subdata._id)]
                                    }
                                })
                            }}>
                                <FaEdit />
                            </h3>
                            <h3 className="c-red" onClick={() => {
                                dispatch({
                                    type : "ChangeSertiState",
                                    payload : {
                                        display : true,
                                        type: "delete",
                                        id: subdata._id,
                                    }
                                })
                            }}>
                                <FaTrash />
                            </h3>
                        </div>
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
        return <ErrData message={`no ${type} yet`} dashboard={true} />
    }

    return data.map((val,index)=>{
        switch (type) {
            case "certificate":
                return <Cert_Card subdata={val} key={index} />
            case "project":
                return <Project_Card subdata={val} key={index} />
            case "skill":
                return <Skill_Card subdata={val} key={index} />
        }
    })
}


const Dashboard = () => {
    const {state, dispatch} = useContext(AuthContext);
    const [activeState,setAS] = useState("project");
    const router = useRouter();

    function setActiveCard(){
        console.log(activeState)
        switch(activeState){
            case "project":
                dispatch({
                    type: "ChangeProjectState",
                    payload : {
                        display : true,
                        type : "post"
                    }
                })
                break
            case "cert":
                dispatch({
                    type :"ChangeSertiState",
                    payload : {
                        display : true,
                        type : "post"
                    }
                })
                break
            case "skill":
                dispatch({
                    type : "ChangeSkillState",
                    payload : {
                        display : true,
                        type : "post"
                    }
                })
                break;
        }
    }

    const name = state.name.split(" ")
    const picture = state.detail.picture
    return (
        <>
            {state?.pmState?.display  && <PrivateMessage />}
            {state?.certificateState?.display && activeState === "cert" ? <CertModal /> : <></>}
            {state?.projectState?.display && activeState === "project" ? <ProjectModal /> : <></>}
            {state?.skillState?.display && activeState === "skill" ? <SkillModal /> : <></>}

            <div className={style.lovely_user_wrapper}>
                <div className={style.lovely_top_user}>
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
                        {state.name}
                    </h1>
                    <h1 className={`${style.lovely_username} ${style.pm_remover}`} style={{
                        fontSize: ".8em"
                    }}>
                        @{state.username}
                    </h1>
                    <div className={style.lovely_topb_user}>
                        <div className={style.description_side}>
                            <p className={`${style.lovely_description} ${style.pm_remover}`}>
                            {state.detail?.description}
                            </p>
                        </div>
                        <Link href={"state.detail?.web"}>
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
                            <Link href="https://instagram.com">
                                <a>
                                    <h3 className={`${style.user_social} ${style.pm_remover}`}>
                                        <FaLinkedin />
                                    </h3>
                                </a>
                            </Link>
                            <Link href="https://instagram.com">
                                <a>
                                    <h3 className={`${style.user_social} ${style.pm_remover}`}>
                                        <FaGithubSquare />
                                    </h3>
                                </a>
                            </Link>
                            <Link href={`mailto:najmim625@gmail.com`}>
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
                        <abbr title="project" className={style.event_perks}>
                            <div className={style.event_perks} onClick={()=> setAS("project")} style={{
                                borderBottom : `${ activeState == "project" ? "4px" : "0px"} solid var(--black)`
                            }}>
                                <h3 className={`${style.perks_icon} ${style.pm_remover}`} >
                                    <FaTools />
                                </h3>
                            </div>
                        </abbr>
                        <abbr title="certificate" className={style.event_perks}>
                            <div className={style.event_perks} onClick={()=> setAS("cert")} style={{
                                borderBottom : `${ activeState == "cert" ? "4px" : "0px"} solid var(--black)`
                            }}>
                                <h3 className={`${style.perks_icon} ${style.pm_remover}`}>
                                    <FaCertificate />
                                </h3>
                            </div>
                        </abbr>
                        <abbr title="skill" className={style.event_perks}>
                            <div className={style.event_perks} onClick={()=> setAS("skill")} style={{
                                borderBottom : `${ activeState == "skill" ? "4px" : "0px"} solid var(--black)`
                            }}>
                                <h3 className={`${style.perks_icon} ${style.pm_remover}`}>
                                    <FaChartBar />
                                </h3>
                            </div>
                        </abbr>
                    </div>
                    <div className={style.addData} onClick={setActiveCard}>
                        <h3 className="poppins c-black">
                            Add {activeState} + 
                        </h3>
                    </div>
                    {activeState == "project" && <Card_Looper type={"project"} data={state.project} />}
                    {activeState == "skill" && <Card_Looper type={"skill"} data={state.skill} />}
                    {activeState == "cert" && <Card_Looper type={"certificate"} data={state.certificate} />}
                </div>
            </div>
            <DashboardNav />
            <Footer />
        </>
    )
}

export default Dashboard;