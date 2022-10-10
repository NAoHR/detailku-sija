import { useContext,  useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import style from "../../styles/components-css/Dashboard/DashboardNav.module.css"

import CustomLink from "../../utils/Custom_link";
import {AiFillSetting, AiFillMessage} from "react-icons/ai";
import {RiLogoutCircleRFill} from "react-icons/ri";
import {FaUserEdit ,FaHome} from "react-icons/fa"




const DashboardNav = () => {
    const [isExpand, setIS] = useState(false);
    const {logout, dispatch, state} = useContext(AuthContext);

    return (
        <>
        <div className={style.fixedWrapper}>
            <div className={`${style.expander} flex b-black`} style={{
                padding : `${isExpand ? "10px 10px 10px" : "0px"}`,
                height : `${isExpand ? "auto" : "0px"}`,
                transition : ".5s",
                border : `${isExpand ? "2px solid var(--orange)" : "none"}`
            }}>
                <abbr title="message">
                    <h4 onClick={()=>{
                        dispatch({
                            type: "changePmState",
                            payload : {
                                isLoading : true,
                                display : true
                            }
                        })
                    }}>
                        <AiFillMessage />
                    </h4>
                </abbr>

                <abbr title="edit details">
                    <h4 onClick={()=>{
                        dispatch({
                            type: "changeUserCredState",
                            payload: {
                                display : true,
                                type: "edit"
                            }
                        })
                    }}>
                        <FaUserEdit />
                    </h4>
                </abbr>

                <CustomLink path="/">
                    <abbr title="home">
                        <h4>
                            <FaHome />
                        </h4>
                    </abbr>
                </CustomLink>

                <abbr title="logout">
                    <h4 onClick={() => logout()}>
                        <RiLogoutCircleRFill />
                    </h4>
                </abbr>
            </div>
            <div className={`${style.expand} flex centerAll c-light-orange b-black`} onClick={() => {
                setIS(!isExpand);
            }}>
                <h4>
                    <AiFillSetting />
                </h4>
            </div>
        </div>
        </>
    )

}

export default DashboardNav;