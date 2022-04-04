import style from "../styles/containers-css/User_Main.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import ErrData from "../components/ErrorData";

import {
    FaLink,FaInstagramSquare,FaLinkedin,FaGithubSquare,FaCertificate,FaChartBar,FaTools,FaCompass,FaPen,FaEnvelope
} from "react-icons/fa";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useContext, useState } from "react";
import { TransitContext } from "../utils/Transition_Context";
import CustomLink from "../utils/Custom_link";

const Project_Card = ({subdata}) => {
    return (
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
                </div>
                <div className={style.project_description_side}>
                    <p className={`${style.description_text} ${style.pm_remover}`}>
                        {subdata.description}
                    </p>
                </div>
                <div className={style.project_link_side}>
                    <h3 className={`${style.project_link} ${style.pm_remover}`}>
                        <FaLink />
                    </h3>
                    <Link href={subdata.link}>
                        <a>
                        <h3 className={`${style.project_link} ${style.pm_remover}`}>
                            more
                        </h3>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
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
                        <FaPen /> {subdata.certID}
                    </h2>
                    <h2 className={`${style.cert_org} ${style.pm_remover}`}>
                        <FaCompass /> {subdata.organizer}
                    </h2>
                    <Link href={subdata.certLink}>
                        <a>
                            <h2 className={`${style.cert_link} ${style.pm_remover}`}>
                                <FaLink /> More Detail
                            </h2>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Card_Looper = ({data, type}) => {
    if(data.length == 0){
        return <ErrData message={`no ${type} yet`} />
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


const User_Main = ({data}) => {
    const [activeState,setAS] = useState("project");
    const TransitHandler = useContext(TransitContext);
    const name = data.name.split(" ")
    const picture = data.detail.picture

    return (
        <>
            <Navbar />
            <div className={style.lovely_user_wrapper}>
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
                        <div className={style.lovely_topt_creds}>
                            <div className={style.lovely_name_side}>
                                <h1 className={`${style.lovely_name} ${style.pm_remover}`}>
                                    {data.name}
                                </h1>
                            </div>
                            <h1 className={`${style.lovely_username} ${style.pm_remover}`}>
                                @{data.username}
                            </h1>
                        </div>
                    </div>
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