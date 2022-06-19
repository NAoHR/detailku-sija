import style from "../../styles/components-css/usable/Navbar.module.css";
import CustomLink from "../../utils/Custom_link";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";

import {
    FaBars,FaTimes
} from "react-icons/fa";

export default function Navbar(){
    const [expand, setExpand] = useState(false);
    const [page,setPage] = useState(null);
    const router = useRouter();
    function setColor(page,given){
        return {
            "textDecoration" : `${page == given ? "underline var(--orange)" : "none"}`
        }
    }
    useEffect(()=>{
        let pathName = router.pathname;
        if(pathName){
            pathName = pathName.split("/")[1];
            switch(pathName){
                case "":
                    setPage("home")
                    return;
                default:
                    setPage(pathName);
                    return;
            }
        }

    },[router.isReady])

    useEffect(()=>{
        console.log(page);
    },[page])
    return (
        <>
        <nav className={style.nav_wrapper}>
            <div className={style.center_wrapper}>
                <div className={`${style.left_side} ${style.align_center}`}>
                    <CustomLink path={"/"}>
                        <h1 className={style.center_side_content}>
                            Detailku
                        </h1>
                    </CustomLink>
                </div>
                <div className={`${style.center_side}  ${style.align_center}`}>
                    <span className={style.center_span}>
                        <CustomLink path={"/"}>
                            <h1 className={style.center_side_content} style={setColor(page,"home")}>
                                Home
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/about"}>
                            <h1 className={style.center_side_content} style={setColor(page,"about")}>
                                About
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/people"}>
                            <h1 className={style.center_side_content} style={setColor(page,"people")}>
                                People
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/job"}>
                            <h1 className={style.center_side_content} style={setColor(page,"job")}>
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
                                    <h1 className={style.expander_text} style={setColor(page,"home")}>
                                        Home
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/people"}>
                                    <h1 className={style.expander_text} style={setColor(page,"people")}>
                                        People
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/job"}>
                                    <h1 className={style.expander_text} style={setColor(page,"job")}>
                                        Job
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={"/about"}>
                                    <h1 className={style.expander_text} style={setColor(page,"about")}>
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