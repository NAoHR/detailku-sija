import axios from "axios";

const url = {
    job : "http://localhost:5000/api/client/jobs",
    people : "http://localhost:5000/api/client/people",
    gradeBased : "http://localhost:5000/api/client/grade/",
    usernameBased : "http://localhost:5000/api/client/user/"
}

export const requestMethod = {
    getAllJob : () => {
        return axios.get(url.job)
    },
    getGradeBased : (grade) => {
        return axios.get(`${url.gradeBased}${grade}`)
    },
    getUsernameBased : (username) => {
        return axios.get(`${url.usernameBased}${username}`)
    },
    getPeople : () => {
        return axios.get(url.people);
    }
}
