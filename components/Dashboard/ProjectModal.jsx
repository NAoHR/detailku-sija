import {toast} from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styleModal from "../../styles/components-css/usable/Modal.module.css"
import { useRef } from "react";
import { requestMethod } from "../../utils/apiCaller";

const ProjectModal = () => {
    const {state , dispatch, logout} = useContext(AuthContext);

    const projectNameRef = useRef();
    const projectDescriptionRef = useRef();
    const projectLinkRef = useRef();

    function submitHandle(e){
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        submitbtn.disabled = true;
        e.preventDefault();

        
        switch(state.projectState.type){
            case "post":{
                requestMethod.addProject({
                    name : projectNameRef.current.value,
                    description : projectDescriptionRef.current.value,
                    link : projectLinkRef.current.value
                })
                    .then((v) => {
                        dispatch({
                            type : "addProject",
                            payload : v.data.data
                        })

                        dispatch({
                            type : "ChangeProjectState",
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
                break;
            }
            case "edit" : {
                const newData = {
                    name : projectNameRef.current.value,
                    description : projectDescriptionRef.current.value,
                    link : projectLinkRef.current.value
                }
                requestMethod.editProject(state.projectState.id._id, newData)
                    .then((v) => {
                        dispatch({
                            type : "editProject",
                            payload : Object.assign(state.projectState.id, newData)
                        })

                        dispatch({
                            type : "ChangeProjectState",
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

                requestMethod.delProject(state.projectState.id)
                    .then((v) => {
                        console.log(v);
                        dispatch({
                            type: "delProject"
                        })
                        dispatch({
                            type : "ChangeProjectState",
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
    
    switch(state.projectState.type){
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
                                            type : "ChangeProjectState",
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
                                        <div className={styleModal.input_perk}>
                                            <label htmlFor="projectname">Project Name</label>
                                            <input 
                                            ref={projectNameRef}
                                            id="projectname"
                                            autoComplete={"off"}
                                            defaultValue={state.projectState.id?.name || ""}
                                            type="text" 
                                            className={`${styleModal.input_modal} poppins`} 
                                            required={true}
                                            placeholder="How To Be Happy 101"
                                            spellCheck={false} 
                                            />
                                        </div>

                                        <div className={styleModal.input_perk}>
                                            <label htmlFor="projectlink">Project Link</label>

                                            <input 
                                            type="text" 
                                            id="projectlink"
                                            ref={projectLinkRef}
                                            autoComplete={"off"}
                                            defaultValue={state.projectState.id?.link || ""}
                                            className={`${styleModal.input_modal} poppins`} 
                                            required={true}
                                            placeholder="justbehappy.com" 
                                            spellCheck={false} />
                                        </div>

                                        <div className={styleModal.input_perk}>
                                            <label htmlFor="projectdescription">Project Description</label>

                                            <textarea 
                                            autoComplete={"off"}
                                            id="projectdescription"
                                            ref={projectDescriptionRef}
                                            defaultValue={state.projectState.id?.description || ""}
                                            className={`${styleModal.input_modal} poppins ${styleModal.longText}`} 
                                            required={true}
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
                                            type : "ChangeProjectState",
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

export default ProjectModal;