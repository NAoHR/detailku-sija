import { useState } from "react";
import style from "../styles/components-css/Navbar.module.css";
import Link from "next/link";
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
                    <img src="/smkn26_logo.png" alt="smkn26logo" className={style.smkn_logo}/>
                </div>
                <div className={`${style.center_side}  ${style.align_center}`}>
                    <Link href="/">
                        <a>
                            <h1 className={style.center_side_content}>
                                Home
                            </h1>
                        </a>
                    </Link>
                    <Link href="/news">
                        <a>
                            <h1 className={style.center_side_content}>
                                News
                            </h1>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <h1 className={style.center_side_content}>
                                About
                            </h1>
                        </a>
                    </Link>
                    <Link href="/profiles">
                        <a>
                            <h1 className={style.center_side_content}>
                                Profiles
                            </h1>
                        </a>
                    </Link>
                </div>
                <div className={`${style.right_side} ${style.align_center}`} onClick={function(e){setExpand(!expand)}}>
                    <div className={`${style.login_box} ${style.align_center}`}>
                        <Link href="/auth/login">
                            <a>
                                <h1 className={style.text_content}>
                                Detailku
                                </h1>
                            </a>
                        </Link>
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
                                <Link href="/">
                                    <a>
                                        <h1 className={style.expander_text}>
                                            Home
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="/home">
                                    <a>
                                        <h1 className={style.expander_text}>
                                            News
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="/about">
                                    <a>
                                        <h1 className={style.expander_text}>
                                            About
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="/news">
                                    <a>
                                        <h1 className={style.expander_text}>
                                            News
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.expander_item}>
                                <Link href="/auth/login">
                                    <a>
                                        <h1 className={style.expander_text}>
                                            Login
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