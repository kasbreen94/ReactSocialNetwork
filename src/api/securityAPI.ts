import {instanse} from "./api";

type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptcha() {
        return instanse.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)
    }
}