import * as axios from "axios";

let cookie = true;
// let cookie = false;

const instance = axios.create({
    withCredentials: cookie,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "be43e656-f2be-4c2c-8047-fb1d382ca968"
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(id){
        return instance.get(`profile/${id}`)
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

};






