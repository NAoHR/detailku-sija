import {toast} from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styleModal from "../../styles/components-css/usable/Modal.module.css"
import { useRef } from "react";
import { requestMethod } from "../../utils/apiCaller";

const UserCredsModal = () => {
    const {state , dispatch, logout} = useContext(AuthContext);

    // linkedin, instagram, github, email, website, userdesc
    const linkedinRef = useRef();
    const instagramRef = useRef();
    const githubRef = useRef();
    const emailRef = useRef();
    const websiteRef = useRef();
    const userdescRef = useRef();

    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        submitbtn.disabled = true;
        e.preventDefault();

        const newData = {
            description : userdescRef.current.value,
            instagram : instagramRef.current.value,
            linkedin : linkedinRef.current.value,
            github : githubRef.current.value,
            email : emailRef.current.value,
            web : websiteRef.current.value,
        }
        
        requestMethod.editCreds(state.detail._id, newData)
            .then((v) => {
                dispatch({
                    type : "editDetail",
                    payload : Object.assign(Object.assign({_id : state.detail._id}, newData))
                })

                dispatch({
                    type : "changeUserCredState",
                    payload : {
                        display : false,
                        type : ""
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
                                    <label htmlFor="linkedin">LinkedIn</label>
                                    <input 
                                    ref={linkedinRef}
                                    id="linkedin"
                                    autoComplete={"off"}
                                    type="text" 
                                    defaultValue={state.detail?.linkedin || ""}
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="instagram">Instagram</label>
                                    <input 
                                    ref={instagramRef}
                                    id="instagram"
                                    autoComplete={"off"}
                                    defaultValue={state.detail?.instagram || ""}
                                    type="text" 
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="Github">Github</label>
                                    <input 
                                    ref={githubRef}
                                    id="Github"
                                    autoComplete={"off"}
                                    defaultValue={state.detail?.github || ""}
                                    type="text" 
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="Email">Email</label>
                                    <input 
                                    ref={emailRef}
                                    id="Email"
                                    autoComplete={"off"}
                                    defaultValue={state.detail?.email || ""}
                                    type="text" 
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="Website">Website</label>
                                    <input 
                                    ref={websiteRef}
                                    id="Website"
                                    autoComplete={"off"}
                                    defaultValue={state.detail?.web || ""}
                                    type="text" 
                                    className={`${styleModal.input_modal} poppins`}                                     
                                    placeholder="Brandon99"
                                    spellCheck={false} 
                                    />
                                </div>

                                <div className={styleModal.input_perk}>
                                    <label htmlFor="userDesc">Description</label>

                                    <textarea 
                                    autoComplete={"off"}
                                    id="userDesc"
                                    ref={userdescRef}
                                    defaultValue={state.detail?.description || ""}
                                    className={`${styleModal.input_modal} poppins ${styleModal.longText}`}                                     
                                    spellCheck={false}
                                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga ab odit voluptas saepe sapiente repellat libero blanditiis totam esse officiis temporibus rerum."
                                    />
                                </div>
                                


                            </div>

                            <button 
                            type="submit" 
                            className={`${styleModal.btn_modal} b-blue`}
                            id={"submit_modal"}
                            >submit</button>

                            <button className={`${styleModal.btn_modal} b-red`} onClick={()=>{
                                dispatch({
                                    type : "changeUserCredState",
                                    payload : {
                                        display : false,
                                        type : ""
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

export default UserCredsModal;