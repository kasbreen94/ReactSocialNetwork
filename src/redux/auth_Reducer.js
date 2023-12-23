import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
    // isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'set_user_data':
        case 'set_captcha':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: 'set_user_data',
    payload: {id, email, login, isAuth}
})

export const setCaptcha = (captcha) => ({
    type: 'set_captcha',
    payload: {captcha}
})

export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.getUserAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptcha = () => async (dispatch) => {

    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
        dispatch(setCaptcha(captchaUrl));

}

export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;