import style from "../styles/components-css/Navbar.module.css";
import CustomLink from "../utils/Custom_link";

import { useState } from "react";
import {
    FaBars,FaTimes
} from "react-icons/fa";

export default function Navbar(){
    const [expand, setExpand] = useState(false);
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
                        <CustomLink path={"/"}>
                            <h1 className={style.center_side_content}>
                                Home
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/news"}>
                            <h1 className={style.center_side_content}>
                                news
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/about"}>
                            <h1 className={style.center_side_content}>
                                About
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/people"}>
                            <h1 className={style.center_side_content}>
                                People
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/job"}>
                            <h1 className={style.center_side_content}>
                                Job
                            </h1>
                        </CustomLink>
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
                                <CustomLink path={"/"}>
                                    <h1 className={style.expander_text} >
                                        Home
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/news"}>
                                    <h1 className={style.expander_text} >
                                        News
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/people"}>
                                    <h1 className={style.expander_text} >
                                        People
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/job"}>
                                    <h1 className={style.expander_text} >
                                        Job
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/about"}>
                                    <h1 className={style.expander_text} >
                                        About
                                    </h1>
                                </CustomLink>
                            </div>
                        </div>
                    </div>
        </nav>
        </>
    )
}