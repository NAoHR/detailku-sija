import {toast} from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styleModal from "../../styles/components-css/usable/Modal.module.css"
import { useRef } from "react";
import { requestMethod } from "../../utils/apiCaller";

const SkillModal = () => {
    const {state ,dispatch} = useContext(AuthContext);

    const skillNameRef = useRef();
    const skillPercentageRef = useRef();

    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        e.preventDefault();

        
        switch(state.skillState.type){
            case "post":{
                requestMethod.addSkill({
                    skillName : skillNameRef.current.value,
                    percentage : skillPercentageRef.current.value
                })
                    .then((v) => {
                        dispatch({
                            type : "addSkill",
                            payload : v.data.data
                        })
        
                        dispatch({
                            type : "ChangeSkillState",
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
                    skillName : skillNameRef.current.value,
                    percentage : skillPercentageRef.current.value
                }
                console.log(state.skillState.id)
                requestMethod.editSkill(state.skillState.id._id, newData)
                    .then((v) => {
                        dispatch({
                            type: "editSkill",
                            payload : Object.assign(state.skillState.id, newData)
                        }),
                        dispatch({
                            type : "ChangeSkillState",
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
                requestMethod.delSkill(state.skillState.id)
                    .then((v) => {
                        console.log(v);
                        dispatch({
                            type: "delSkill"
                        })
                        dispatch({
                            type : "ChangeSkillState",
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
    
    switch(state.skillState.type){
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
                                            type : "ChangeSkillState",
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
                                        ref={skillNameRef}
                                        autoComplete={"off"}
                                        defaultValue={state.skillState.id?.skillName || ""}
                                        type="text" 
                                        className={`${styleModal.input_modal} poppins`} 
                                        required={true}
                                        placeholder="Skill Name"
                                        spellCheck={false} 
                                        />
                                        <input 
                                        type="number" 
                                        ref={skillPercentageRef}
                                        autoComplete={"off"}
                                        defaultValue={state.skillState.id?.percentage || ""}
                                        className={`${styleModal.input_modal} poppins`} 
                                        required={true}
                                        placeholder="Skill Percentage" 
                                        min={0}
                                        max={100}
                                        spellCheck={false} />
                                    </div>
        
                                    <button 
                                    type="submit" 
                                    className={`${styleModal.btn_modal} b-blue`}
                                    id={"submit_modal"}
                                    >submit</button>
        
                                    <button className={`${styleModal.btn_modal} b-red`} onClick={()=>{
                                        dispatch({
                                            type : "ChangeSkillState",
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

export default SkillModal