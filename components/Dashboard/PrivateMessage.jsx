import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styleModal from "../../styles/components-css/usable/Modal.module.css"
import {AiFillCloseCircle} from "react-icons/ai";
import ErrData from "../Usable/ErrorData";
import { requestMethod } from "../../utils/apiCaller";
import {toast} from "react-toastify";
import { FaTrash } from "react-icons/fa";


const DeleteModal = () => {
    const {state, dispatch} = useContext(AuthContext);
    function submitHandle(e){
        e.preventDefault()
        const submitbtn = document.getElementById("submit_modal");
        const loadToast = toast.loading("please wait");

        submitbtn.disabled = true;
        requestMethod.delPm(state.pmState.id)
            .then(() => {
                toast.update(loadToast, {render : "data deleted", type: "success", isLoading : false, autoClose : true })
                dispatch({
                    type: "delMessage"
                })

                dispatch({
                    type: "changePmState",
                    payload : {
                        ...state.pmState,
                        displayModal : false,
                        id: ""
                    }
                })

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
        console.log("submitted", state.pmState)
    }
    return (
        <>
            <div className={`${styleModal.black_screen} flex centerAll`} style={{
                zIndex: 99
            }}>
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
                                    type: "changePmState",
                                    payload : {
                                        ...state.pmState,
                                        displayModal : false,
                                        id: ""
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

const PmCard = ({data}) => {
    const {state, dispatch} = useContext(AuthContext);

    return (
        <div className="flex" style={{
            padding: "10px",
            width: "100%",
            flexDirection : "column",
            gap: "10px",
            
                }}>
            <div className="poppins shadow c-black" style={{
                width: "100%",
                minHeight: "120px",
                background: "#fff",
                borderLeft : "10px solid var(--blue)",
                borderTopRightRadius : "8px",
                borderBottomRightRadius : "8px",
                padding : "10px"
            }}>
                <div style={{
                    width : "100%",
                    height : "30px",
                    padding: "5px",
                    display : "flex",
                    justifyContent: "flex-end",
                    color : "var(--red)",
                    fontSize: "1.2em"
                }}>
                    <h4 onClick={()=>{
                        dispatch({
                            type: "changePmState",
                            payload : {
                                ...state.pmState,
                                displayModal : true,
                                id: data._id
                            }
                        })
                    }} className={styleModal.trash}>
                        <FaTrash />
                    </h4>
                </div>
                <h2 style={{
                    opacity : ".9",
                    fontSize : "1.7em"
                }}>
                    {data.from}
                </h2>
                <h4 style={{
                    opacity : ".9",
                    fontSize : "1em"
                }}>
                    {data.email}
                </h4>
                <p style={{
                    marginTop: "10px"
                }}>
                    {data.message}
                </p>
            </div>

        </div>
    )
}

const PrivateMessage = () => {
    const {state, dispatch} = useContext(AuthContext);

    useEffect(() => {
        requestMethod.getPrivateMessage()
            .then((v) => {
                toast.success("message fetched");
                dispatch({
                    type : "showMessage",
                    payload : v.data.data  
                })
                dispatch({
                    type: "changePmState",
                    payload : {
                        isLoading : false,
                        display : true
                    }
                })
            })
            .catch((e) => {
                console.log("q")
                toast.error("something went wrong")
            })
    }, [])
    const DecideDataToShow = () => {
        if(state.pmState?.isLoading){
            return <ErrData message={"crunching up the data"}/>
        }else{
            if(state.privateMessage.length !== 0){
                return state.privateMessage.map((v) => {
                    return <PmCard key={v._id} data={v} />
                })
            }
            return <ErrData message={"You do not have any messages yet"}/>   
        }
    }
    return (
        <>
        {state.pmState?.displayModal && <DeleteModal />}
        <div className={`${styleModal.black_screen} flex centerAll`}>
            <div className={`${styleModal.pmModal} b-white`} style={{
                width: "min(700px, 95%)",
                height : "min(600px, 100%)",
                background : "#eee",
                overflow: "hidden"
            }}>
                <div className={`${styleModal.modal_top} b-light-orange flex c-red`} style={{
                    justifyContent : "flex-end",
                    alignItems : "center",
                    padding: "10px 10px 1px 10px",
                    height: "auto",
                    fontSize: "2em"
                }}>
                    <p onClick={()=>{
                        dispatch({
                            type: "changePmState",
                            payload : {
                                isLoading : true,
                                display : false
                            }
                        })
                    }}>
                        <AiFillCloseCircle />
                    </p>
                </div>
                
                <div style={{
                    width: "100%",
                    height : "min(550px, 100%)",
                    overflowY: "auto",
                    position: "relative"
                }}>
                    <DecideDataToShow />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default PrivateMessage;