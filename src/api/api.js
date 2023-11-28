import axios from "axios";

const instanse = axios.create ({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "911ab96a-8ca5-43d7-ab4d-214ef48c7cee"
    }
});

export const usersAPI = {
    getUserProfile(userId) {
        return instanse.get(`profile/${userId}`)
    .then(response => {
            return response.data;
        });
    },
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => {
            return response.data;
        })
    },
    deleteUserUnfollow(id) {
        return instanse.delete(`follow/${id}`, {
        }).then(response => {
            return response.data;
        });
    },
    postUserFollow(id) {
        return instanse.post(`follow/${id}`, {}, {
        }).then(response => {
            return response.data;
        });
    },
    getUserAuth() {
        return instanse.get(`auth/me`, {}, {
        }).then(response => {
            return response.data;
        });
    }
}
