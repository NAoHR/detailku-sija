import { useContext, useState } from "react";
import style from "../styles/components-css/Navbar.module.css";
import Link from "next/link";
import {
    FaBars,FaTimes
} from "react-icons/fa";

import { TransitContext } from "../utils/Transition_Context";

export default function Navbar(){
    const [expand, setExpand] = useState(false);
    const transitHandler = useContext(TransitContext);
    return (
        <>
        <nav className={style.nav_wrapper}>
            <div className={style.center_wrapper}>
                <div className={`${style.left_side} ${style.align_center}`}>
                    <h1 className={style.center_side_content}>
                        Detailku
                    </h1>
                </div>
                <div className={`${style.center_side}  ${style.align_center}`}>
                    <span className={style.center_span}>
                        <Link href="#" as="/">
                            <a classsName={`${style.pm_remover}`} onClick={()=> transitHandler("/")}>
                                <h1 className={style.center_side_content}>
                                    Home
                                </h1>
                            </a>
                        </Link>
                    </span>
                    <span className={style.center_span}>
                        <Link href="#" as="/news">
                            <a classsName={`${style.pm_remover}`} onClick={()=> transitHandler("/news")}>
                                <h1 className={style.center_side_content}>
                                    News
                                </h1>
                            </a>
                        </Link>
                    </span>
                    <span className={style.center_span}>
                        <Link href="#" as="/about">
                            <a classsName={`${style.pm_remover}`} onClick={()=> transitHandler("/about")}>
                                <h1 className={style.center_side_content} >
                                    About
                                </h1>
                            </a>
                        </Link>
                    </span>
                    <span className={style.center_span}>
                        <Link href="#" as="/people">
                            <a classsName={`${style.pm_remover}`} onClick={()=> transitHandler("/people")}>
                                <h1 className={style.center_side_content} >
                                    People
                                </h1>
                            </a>
                        </Link>
                    </span>
                    <span className={style.center_span}>
                        <Link href="#" as="/job">
                            <a classsName={`${style.pm_remover}`} onClick={()=> transitHandler("/job")}>
                                <h1 className={style.center_side_content} >
                                    Job
                                </h1>
                            </a>
                        </Link>
                    </span>
                </div>
                <div className={`${style.right_side} ${style.align_center}`} onClick={function(e){setExpand(!expand)}}>
                        <div className={`${style.align_center} ${style.diss}`}>
                            <img src="/smkn26_logo.png" alt="smkn26logo" className={style.smkn_logo}/>
                        </div>
                    <h1 className={style.icon_wrapper} style={{color : expand ? "var(--white)" : "var(--black)", transition : ".5s"}} >
                        {expand ? <FaTimes /> : <FaBars />}
                    </h1>
                </div>
            </div>

            <div className={style.expander} style={
                    {
                        "transition" : ".6s",
                        "width" : expand ? "100%" : "0px"
                    }
                    }>
                        <div className={style.abs_wrapper_top}></div>
                        <div className={style.abs_wrapper_bottom}></div>
                        <div className={style.expander_wrapper}>
                            <div className={style.expander_item}>
                                <Link href="#" as="/">
                                    <a classsName={style.pm_remover} onClick={()=> transitHandler("/")}>
                                        <h1 className={style.expander_text} >
                                            Home
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="#" as="/news">
                                    <a classsName={style.pm_remover} onClick={()=> transitHandler("/news")}>
                                        <h1 className={style.expander_text} >
                                            News
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="#" as="/people">
                                    <a classsName={style.pm_remover} onClick={()=> transitHandler("/people")}>
                                        <h1 className={style.expander_text} >
                                            People
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="#" as="/job">
                                    <a classsName={style.pm_remover} onClick={()=> transitHandler("/job")}>
                                        <h1 className={style.expander_text}>
                                            Job
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
        </nav>
        </>
    )
}