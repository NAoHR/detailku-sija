import style from "../../styles/components-css/usable/Navbar.module.css";
import CustomLink from "../../utils/Custom_link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

import {
    FaBars,FaTimes
} from "react-icons/fa";

export default function Navbar(){
    const [expand, setExpand] = useState(false);
    const [page,setPage] = useState(null);
    const router = useRouter();
    const {state, isLoggedIn, dispatch} = useContext(AuthContext);

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

    useEffect(() => {
        isLoggedIn()
        .then((v) => {
            dispatch({type: "isLoggedIn", payload : v});
        })
        .catch((e)=>{
            console.log("here", e)
            dispatch({type: "LogOut"});
        });
    }, [])

    return (
        <>
        <nav className={style.nav_wrapper}>
            <div className={style.center_wrapper}>
                <div className={`${style.left_side} ${style.align_center}`}>
                    <CustomLink path={"/"}>
                        <h1 className={`${style.center_side_content} ${style.hovered}`}>
                            Detailku
                        </h1>
                    </CustomLink>
                </div>
                <div className={`${style.center_side}  ${style.align_center}`}>
                    <span className={style.center_span}>
                        <CustomLink path={"/"}>
                            <h1 className={`${style.center_side_content} ${page !== "home" && style.hovered}`} style={setColor(page,"home")}>
                                Home
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/about"}>
                            <h1 className={`${style.center_side_content} ${page !== "about" && style.hovered}`} style={setColor(page,"about")}>
                                About
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/people"}>
                            <h1 className={`${style.center_side_content} ${page !== "people" && style.hovered}`} style={setColor(page,"people")}>
                                People
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/job"}>
                            <h1 className={`${style.center_side_content} ${page !== "job" && style.hovered}`} style={setColor(page,"job")}>
                                Job
                            </h1>
                        </CustomLink>
                    </span>
                    <span className={style.center_span}>
                        <CustomLink path={"/publicmsg"}>
                            <h1 className={`${style.center_side_content} ${page !== "publicmsg" && style.hovered}`} style={setColor(page,"publicmsg")}>
                                Publicmessage
                            </h1>
                        </CustomLink>
                    </span>
                </div>
                <div className={`${style.right_side} ${style.align_center}`} onClick={function(e){setExpand(!expand)}}>
                        <div className={`${style.align_center} ${style.diss}`} style={{
                            background: "var(--orange)",
                            borderRadius : "8px"
                        }}>
                            <CustomLink path={`${state.loginRelated.isLoggedIn ? "/me" : "/login"}`}>
                                <h1 className={style.center_side_content} style={{
                                    ...setColor(page,"login"),
                                    fontSize: "1em",
                                    padding: "5px 10px 5px 10px",
                                    color: "var(--white)"
                                }}>
                                    {`${state.loginRelated.isLoggedIn ? "me" : "Login"}`}
                                </h1>
                            </CustomLink>
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
                            <div className={style.expander_item}>
                                <CustomLink path={"/publicmsg"}>
                                    <h1 className={style.expander_text} style={setColor(page,"publicmsg")}>
                                        Publicmessage
                                    </h1>
                                </CustomLink>
                            </div>
                            <div className={style.expander_item}>
                                <CustomLink path={`${state.loginRelated.isLoggedIn ? "/me" : "/login"}`}>
                                    <h1 className={style.expander_text} style={setColor(page,"login")}>
                                        {`${state.loginRelated.isLoggedIn ? "me" : "Login"}`}
                                    </h1>
                                </CustomLink>
                            </div>
                        </div>
                    </div>
        </nav>
        </>
    )
}