import axios from "axios";

const baseUrl = "https://detailku-server.herokuapp.com/api/"
const url = {
    // get
    job : `${baseUrl}client/jobs`,
    people : `${baseUrl}client/people`,
    gradeBased : `${baseUrl}client/grade/`,
    usernameBased : `${baseUrl}client/user/`,
    userAuth: `${baseUrl}auth/user/login`,
    getPublicMessage : `${baseUrl}client/publicMsg`,
    getPrivateMessage : `${baseUrl}user/me/message`,

    // post - public
    privateMessage : `${baseUrl}client/post/privateMsg`,
    publicMessage : `${baseUrl}client/post/publicMsg`,

    // post - user
    loginUser : `${baseUrl}auth/user/login`,

    // certi
    postCerti : `${baseUrl}user/add/cert`,
    deleteCerti : `${baseUrl}user/delete/cert`,
    editCerti : `${baseUrl}user/edit/cert`,

    // project
    postProject : `${baseUrl}user/add/project`,
    deleteProject : `${baseUrl}user/delete/project`,
    editProject : `${baseUrl}user/edit/project`,


    // skill
    postSkill : `${baseUrl}user/add/skill`,
    deleteSkill : `${baseUrl}user/delete/skill`,
    editSkill : `${baseUrl}user/edit/skill`,

    // privateMessage
    deletePrivateMessage : `${baseUrl}user/delete/privateMessage`,

    // user related
    editCreds: `${baseUrl}user/edit/creds`

}

const getDttoken = () => {
    return window.localStorage.getItem("dttoken")
}

export const requestMethod = {
    // get
    getAllJob : () => {
        return axios.get(url.job);
    },
    getGradeBased : (grade) => {
        return axios.get(`${url.gradeBased}${grade}`);
    },
    getUsernameBased : (username) => {
        return axios.get(`${url.usernameBased}${username}`);
    },
    getPeople : () => {
        return axios.get(url.people);
    },
    getPublicMessage : () => {
        return axios.get(url.getPublicMessage);
    },
    getPrivateMessage: () => {
        return axios.get(url.getPrivateMessage,
            {
                headers : {
                    Authorization : getDttoken()
                }
            }
        )
    },

    // set
    sendprivateMesage: (id,body) => {
        return axios.post(`${url.privateMessage}/${id}`, body);
    },
    sendPublicMesage: (body) => {
        console.log(url.publicMessage)
        return axios.post(`${url.publicMessage}`, body);
    },

    // auth
    loginUser : (body) => {
        return axios.post(url.loginUser, body)
    },

    // user
    addCerti : (body) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.post(url.postCerti, body, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },
    delCerti : (id) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.delete(`${url.deleteCerti}/${id}`, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },
    editCerti : (id, body) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.put(`${url.editCerti}/${id}`, body , 
        {
            headers : {
                Authorization : getDttoken()
            }
        }
        )
    },

    // project
    addProject : (body) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.post(url.postProject, body, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },
    delProject : (id) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.delete(`${url.deleteProject}/${id}`, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },

    editProject: (id, body) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.put(`${url.editProject}/${id}`, body , 
        {
            headers : {
                Authorization : getDttoken()
            }
        }
        )
    },

    // project
    addSkill : (body) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.post(url.postSkill, body, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },
    delSkill : (id) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.delete(`${url.deleteSkill}/${id}`, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },

    editSkill: (id, body) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.put(`${url.editSkill}/${id}`, body , 
        {
            headers : {
                Authorization : getDttoken()
            }
        }
        )
    },

    // private message
    delPm : (id) => {
        // const dttoken = window.localStorage.getItem("dttoken");
        return axios.delete(`${url.deletePrivateMessage}/${id}`, {
            headers : {
                Authorization : getDttoken()
            }
        })
    },


    // user related
    editCreds: (id, body) => {
        return axios.put(`${url.editCreds}/${id}`, body, {
            headers : {
                Authorization : getDttoken()
            }
        })
    }
}
