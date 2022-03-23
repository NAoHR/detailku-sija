import axios from "axios";

const url = {
    job : "https://detailku-server.herokuapp.com/api/client/jobs",
    people : "https://detailku-server.herokuapp.com/api/client/people",
    gradeBased : "https://detailku-server.herokuapp.com/api/client/grade/",
    usernameBased : "https://detailku-server.herokuapp.com/api/client/user/"
}

export const requestMethod = {
    getAllJob : () => {
        console.log(url.job);
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
