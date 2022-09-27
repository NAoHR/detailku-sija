import { useContext,  useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import style from "../../styles/components-css/Dashboard/DashboardNav.module.css"

import CustomLink from "../../utils/Custom_link";
import {AiFillSetting, AiFillMessage} from "react-icons/ai";
import {RiLogoutCircleRFill} from "react-icons/ri";
import {FaUserCircle ,FaHome} from "react-icons/fa"




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
                <CustomLink path="/">
                    <h4>
                        <FaHome />
                    </h4>
                </CustomLink>
                <h4 onClick={() => logout()}>
                    <RiLogoutCircleRFill />
                </h4>
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