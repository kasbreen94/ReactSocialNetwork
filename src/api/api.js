import axios from "axios";

const instanse = axios.create ({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "80f7eb98-d03d-4e4e-bcc2-ee3aa206800e"
    }
});

export const usersAPI = {
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    },
    getUsers(count) {
        return instanse.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`);
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
    },
    updatePhoto(file) {
        let formData = new FormData();
        formData.append("image", file)

        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateInfo(profile) {
        return instanse.put(`https://social-network.samuraijs.com/api/1.0/profile`, profile);
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
