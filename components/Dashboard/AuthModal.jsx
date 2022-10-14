import {toast} from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styleModal from "../../styles/components-css/usable/Modal.module.css"
import { useRef } from "react";
import { requestMethod } from "../../utils/apiCaller";

const AuthModal = () => {
    const [displayPswd,setDP] = useState(false);
    const {state , dispatch, logout} = useContext(AuthContext);

    // linkedin, instagram, github, email, website, userdesc
    const nameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        submitbtn.disabled = true;
        e.preventDefault();

        const newData = {
            name : nameRef.current.value,
            username : usernameRef.current.value,
        }
        
        requestMethod.editAuth(passwordRef.current.value === "" ? newData : Object.assign(newData, {password: passwordRef.current.value}))
            .then((v) => {
                dispatch({
                    type : "editAuth",
                    payload : newData
                })

                dispatch({
                    type: "changeUserAuthState",
                    payload: {
                        display : false,
                        type: "edit"
                    }
                })
                toast.update(loadToast, {render : "data edited", type: "success", isLoading : false, autoClose : true })
            })
            .catch((e) => {
                if(e.response?.data?.failedLoginRelated){
                    logout("session ended, please login again", loadToast)
                }else{
                    toast.update(loadToast, {render : e.response.data?.message || "something went wrong", type: "error", isLoading : false, autoClose : true})
                }
            })
            .finally(() => {
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
                        >
                            <div className={styleModal.form_content}>
                                <div className={styleModal.input_perk}>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                    ref={nameRef}
                                    id="name"
                                    autoComplete={"off"}
                                    type="text" 
                                    defaultValue={state?.name || ""}
                                    className={`${styleModal.input_modal} poppins`}         
                                    required={true}                    
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="usernmae">Username</label>
                                    <input 
                                    ref={usernameRef}
                                    id="usernmae"
                                    autoComplete={"off"}
                                    defaultValue={state?.username || ""}
                                    type="text" 
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    required={true}
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="Password">Password</label>
                                    <input 
                                    ref={passwordRef}
                                    id="Password"
                                    autoComplete={"off"}
                                    type={`${displayPswd ? "text" : "password"}`}
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    placeholder="******"
                                    spellCheck={false} 
                                    />

                                    <label style={{
                                        fontSize: ".9em",
                                        textDecoration: "none"
                                    }} className="poppins" htmlFor="pswd">
                                        <input type="checkbox" name="" id="pswd" style={{
                                            position: "relative",
                                            width: "1.1em",
                                            height: "1.1em",
                                            top: "3px"
                                        }} onClick={()=> setDP(!displayPswd)} /> show password
                                    </label>
                                </div>

                            </div>

                            <button 
                            type="submit" 
                            className={`${styleModal.btn_modal} b-blue`}
                            id={"submit_modal"}
                            >submit</button>

                            <button className={`${styleModal.btn_modal} b-red`} onClick={()=>{
                                dispatch({
                                    type: "changeUserAuthState",
                                    payload: {
                                        display : false,
                                        type: "edit"
                                    }
                                })
                            }}> close</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModal;