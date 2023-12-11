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
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {});
    },
    deleteUserUnfollow(userId) {
        return instanse.delete(`follow/${userId}`, {});
    },
    postUserFollow(userId) {
        return instanse.post(`follow/${userId}`, {}, {});
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    getUserAuth() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}
