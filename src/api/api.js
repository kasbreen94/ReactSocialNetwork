import axios from "axios";

const instanse = axios.create ({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "911ab96a-8ca5-43d7-ab4d-214ef48c7cee"
    }
});

const data = response => {
    return response.data;
}

export const usersAPI = {
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    },
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(data)
    },
    deleteUserUnfollow(userId) {
        return instanse.delete(`follow/${userId}`, {
        }).then(data);
    },
    postUserFollow(userId) {
        return instanse.post(`follow/${userId}`, {}, {
        }).then(data);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
            .then(data);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
            .then(data);
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status})
            .then(data);
    }
}

export const authAPI = {
    getUserAuth() {
        return instanse.get(`auth/me`).then(data);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe}).then(data);
    },
    logout() {
        return instanse.delete(`auth/login`).then(data);
    }
}
