import axios from "axios";
import {ProfileType} from "../redux/types/types";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "80f7eb98-d03d-4e4e-bcc2-ee3aa206800e"
    }
});

export const usersAPI = {
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    },
    getUsers(count: number) {
        return instanse.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`);
    },
    getUserFollowed(userId: number) {
        return instanse.get(`follow/${userId}`, {});
    },
    deleteUserUnfollow(userId: number) {
        return instanse.delete(`follow/${userId}`, {});
    },
    postUserFollow(userId: number) {
        return instanse.post(`follow/${userId}`, {}, {});
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instanse.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instanse.put(`profile/status`, {status: status});
    },
    updatePhoto(file: any) {
        let formData = new FormData();
        formData.append("image", file)

        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateInfo(profile: ProfileType) {
        return instanse.put(`https://social-network.samuraijs.com/api/1.0/profile`, profile);
    }
}

export enum ResultCodes {
    Success = 0,
    Error = 1,
}

export enum ResultCodeCaptcha {
    CaptchaIsRequired = 10
}

type getUserAuthResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodes | ResultCodeCaptcha
    messages: Array<string>

}

export const authAPI = {
    getUserAuth() {
        return instanse.get<getUserAuthResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instanse.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instanse.get(`security/get-captcha-url`);
    }
}