import {AppStateType} from "../redux_store";

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const getCaptcha = (state: AppStateType) => {
    return state.auth.captcha
}
export const getAuthUserId = (state: AppStateType) => {
    return state.auth.id
}
