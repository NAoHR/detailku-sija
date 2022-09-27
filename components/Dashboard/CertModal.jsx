import {toast} from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styleModal from "../../styles/components-css/usable/Modal.module.css"
import { useRef } from "react";
import { requestMethod } from "../../utils/apiCaller";

const CertModal = () => {
    const {state ,dispatch} = useContext(AuthContext);

    const certiTitleRef = useRef();
    const orgRef = useRef();
    const certId = useRef();
    const certiLink = useRef();

    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        e.preventDefault();

        
        switch(state.certificateState.type){
            case "post":{
                requestMethod.addCerti({
                    title : certiTitleRef.current.value,
                    organizer : orgRef.current.value,
                    certID : certId.current.value,
                    certLink : certiLink.current.value
                })
                    .then((v) => {
                        dispatch({
                            type : "addCerti",
                            payload : v.data.data
                        })
        
                        dispatch({
                            type : "ChangeSertiState",
                            payload : {
                                display : false,
                                type : ""
                            }
                        })
                        toast.update(loadToast, {render : "data added", type: "success", isLoading : false, autoClose : true })
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
                break
            }
            case "edit" : {
                const newData = {
                    title : certiTitleRef.current.value,
                    organizer : orgRef.current.value,
                    certID : certId.current.value,
                    certLink : certiLink.current.value
                }

                requestMethod.editCerti(state.certificateState.id._id, newData)
                    .then((v) => {
                        dispatch({
                            type: "editCerti",
                            payload : Object.assign(state.certificateState.id, newData)
                        }),
                        dispatch({
                            type : "ChangeSertiState",
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

                break;
            }
            case "delete":{
                requestMethod.delCerti(state.certificateState.id)
                    .then((v) => {
                        console.log(v);
                        dispatch({
                            type: "delCerti"
                        })
                        dispatch({
                            type : "ChangeSertiState",
                            payload : {
                                display : false,
                                type : ""
                            }
                        })
                        toast.update(loadToast, {render : "data deleted", type: "success", isLoading : false, autoClose : true })
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
                break;
            }

        }
    }
    
    switch(state.certificateState.type){
        case "delete":
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
                                        <h5 className="poppins c-black">
                                            Yakin ingin menghapus data ini
                                        </h5>
                                    </div>
        
                                    <button 
                                    type="submit" 
                                    className={`${styleModal.btn_modal} b-blue`}
                                    id={"submit_modal"}
                                    >hapus</button>
        
                                    <button className={`${styleModal.btn_modal} b-red`} onClick={()=>{
                                        dispatch({
                                            type : "ChangeSertiState",
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
        default: 
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
                                        <input 
                                        ref={certiTitleRef}
                                        autoComplete={"off"}
                                        defaultValue={state.certificateState.id?.title || ""}
                                        type="text" 
                                        className={`${styleModal.input_modal} poppins`} 
                                        required={true}
                                        placeholder="Certificate Title"
                                        spellCheck={false} 
                                        />
                                        <input 
                                        type="text" 
                                        ref={orgRef}
                                        autoComplete={"off"}
                                        defaultValue={state.certificateState.id?.organizer || ""}
                                        className={`${styleModal.input_modal} poppins`} 
                                        required={true}
                                        placeholder="organizer" 
                                        spellCheck={false} />
        
                                        <input 
                                        type="text"
                                        ref={certId} 
                                        autoComplete={"off"}
                                        defaultValue={state.certificateState.id?.certID || ""}
                                        className={`${styleModal.input_modal} poppins`} 
                                        required={true}
                                        placeholder="Certificate ID" 
                                        spellCheck={false} />
        
                                        <input 
                                        type="text"
                                        ref={certiLink} 
                                        autoComplete={"off"}
                                        defaultValue={state.certificateState.id?.certLink || ""}
                                        className={`${styleModal.input_modal} poppins`} 
                                        placeholder="Certificate Link" 
                                        spellCheck={false} />
                                    </div>
        
                                    <button 
                                    type="submit" 
                                    className={`${styleModal.btn_modal} b-blue`}
                                    id={"submit_modal"}
                                    >submit</button>
        
                                    <button className={`${styleModal.btn_modal} b-red`} onClick={()=>{
                                        dispatch({
                                            type : "ChangeSertiState",
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
}

export default CertModal