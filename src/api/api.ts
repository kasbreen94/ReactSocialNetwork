import axios from "axios";
import {UsersType} from "../redux/types/types";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d9e0ca41-5c80-4d22-b605-409539101220"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: UsersType[]
    totalCount: number
    error: string |null
}

export type ResponseType<D = {}, RC = ResultCodesEnum> ={
    data: D
    messages: string[]
    resultCode: RC
}