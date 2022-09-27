import { createContext, useReducer} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
export const AuthContext = createContext();

const initialAuthState = {
    loginRelated: {
        isLoggedIn : false,
        errMessage: "",
        loading: true
    },
    name: "",
    grade: "",
    username: "",
    detail : "",
    project : [],
    certificate: [],
    skill: [],
    privateMessage : [],

    pmState : {
        display : false,
        isLoading : true,
        displayModal : false,
        id : ""
    },

    certificateState : {
        display : false,
        type: "",
        id: ""
    },
    projectState : {
        display : false,
        type: "",
        id: ""
    },
    skillState : {
        display : false,
        type: "",
        id: ""
    }
    
}

const reducer = (state, action) => {
    switch(action.type){
        // auth reducer;
        case "isLoggedIn":
            const {payload} = action;
            
            return {
                ...payload, 
                loginRelated : {
                    isLoggedIn : true,
                    errMessage : "",
                    loading : false
                }
            }
        break;

        case "LogOut":
            return initialAuthState;
        
        // serti related
        case "ChangeSertiState":
            return {
                ...state,
                certificateState : action.payload
            }
        case "addCerti":
            return {
                ...state,
                certificate : state.certificate.concat(action.payload)
            }
        case "delCerti":
            return {
                ...state,
                certificate : state.certificate.filter((v) => v._id !== state.certificateState.id)
            }
        case "editCerti":
            state.certificate.splice(state.certificate.findIndex(d => d._id === action.payload._id), 1, action.payload)

            return {
                ...state
            }

        // project relkated
        case "ChangeProjectState":
            return {
                ...state,
                projectState : action.payload
            }

        case "addProject":
            return {
                ...state,
                project : state.project.concat(action.payload)
            }
        
        case "delProject":
            return {
                ...state,
                project : state.project.filter((v) => v._id !== state.projectState.id)
            }
        case "editProject":
            state.project.splice(state.project.findIndex(d => d._id === action.payload._id), 1, action.payload)

            return {
                ...state
            }

        // skill related
        case "ChangeSkillState":
            return {
                ...state,
                skillState : action.payload
            }

        case "addSkill":
            return {
                ...state,
                skill : state.skill.concat(action.payload)
            }
        
        case "delSkill":
            return {
                ...state,
                skill : state.skill.filter((v) => v._id !== state.skillState.id)
            }
        case "editSkill":
            state.skill.splice(state.skill.findIndex(d => d._id === action.payload._id), 1, action.payload)

            return {
                ...state
            }
        
        case "changePmState": {
            return {
                ...state,
                pmState : action.payload,
            }
        }
        case "showMessage": {
            return {
                ...state, 
                privateMessage : action.payload
            }
        }
        case "delMessage" : {
            return {
                ...state,
                privateMessage : state.privateMessage.filter((v) => v._id !== state.pmState.id)
            }
        }
            
    }
}
const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState);
    const router = useRouter();
    
    async function isLoggedIn(){
        const dttoken = window.localStorage.getItem("dttoken");
        const userCred = await axios.get("http://localhost:5000/api/user/me", {
            headers : { 
                Authorization : dttoken
            }
        })
        
        return userCred.data.data
    }

    function logout(message="successfully logged-out", toastReference){
        window.localStorage.clear();
        console.log(message)
        dispatch({type: "LogOut"});
        if(message === "successfully logged-out"){
            toast.success(message);
        }else{
            toast.update(toastReference, {render : message, type: "error", isLoading : false, autoClose : 2000})
        }
        router.push("/login");
    }
    return (
        <AuthContext.Provider value={{state, dispatch, isLoggedIn, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;
