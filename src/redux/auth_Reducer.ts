import {authAPI, ResultCodeCaptcha, ResultCodes, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux_store";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captcha: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

type ActionsTypes = SetAuthUserDataActionType | setCaptchaActionType

type SetAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

type setCaptchaActionType = {
    type: typeof SET_CAPTCHA
    payload: { captcha: string | null }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType  => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const setCaptcha = (captcha: string | null): setCaptchaActionType => ({
    type: SET_CAPTCHA,
    payload: {captcha}
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let  data = await authAPI.getUserAuth()
    if (data.resultCode === ResultCodes.Success) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {

    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodes.Success) {
        dispatch(getAuthUserData());
    } else {
        if(data.resultCode === ResultCodeCaptcha.CaptchaIsRequired) {
            dispatch(getCaptcha());
        }
        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        // dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptcha = (): ThunkType => async (dispatch) => {

    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
        dispatch(setCaptcha(captchaUrl));

}

export const logout = (): ThunkType => async (dispatch) => {

    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;