import * as axios from "axios";

// let cookie = true;
let cookie = false;

const instance = axios.create({
    withCredentials: cookie,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
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
    Auth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
};






