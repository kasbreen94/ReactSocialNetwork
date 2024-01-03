import {ResultCodeCaptcha, ResultCodesEnum} from "../api/api";
import {BaseThunkType, InferActionsTypes} from "./redux_store";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captcha: null as string | null
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
        case 'SN/AUTH/SET_CAPTCHA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean)  => ({
        type: 'SN/AUTH/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const),
    setCaptcha: (captcha: string | null) => ({
        type: 'SN/AUTH/SET_CAPTCHA',
        payload: {captcha}
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let  data = await authAPI.getUserAuth()
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>
    async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData());
    } else {
        if(data.resultCode === ResultCodeCaptcha.CaptchaIsRequired) {
            await dispatch(getCaptcha());
        }
        // let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        // dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptcha();
    const captchaUrl = data.url;
        dispatch(actions.setCaptcha(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;