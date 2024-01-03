import {instanse, ResponseType, ResultCodeCaptcha, ResultCodesEnum} from "./api";



type getUserAuthResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseDataType = {
        userId: number
}

export const authAPI = {
    getUserAuth() {
        return instanse.get<ResponseType<getUserAuthResponseDataType>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instanse.post<ResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeCaptcha>>(`auth/login`, {
            email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout() {
        return instanse.delete<ResponseType<getUserAuthResponseDataType>>(`auth/login`).then(res => res.data)
    }
}