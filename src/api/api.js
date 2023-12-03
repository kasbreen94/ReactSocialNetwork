import axios from "axios";

const instanse = axios.create ({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "911ab96a-8ca5-43d7-ab4d-214ef48c7cee"
    }
});

export const usersAPI = {
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    },
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => {
            return response.data;
        })
    },
    deleteUserUnfollow(userId) {
        return instanse.delete(`follow/${userId}`, {
        }).then(response => {
            return response.data;
        });
    },
    postUserFollow(userId) {
        return instanse.post(`follow/${userId}`, {}, {
        }).then(response => {
            return response.data;
        });
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status})
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    getUserAuth() {
        return instanse.get(`auth/me`, {}, {
        }).then(response => {
            return response.data;
        });
    }
}
