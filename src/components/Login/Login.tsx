import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../redux/auth_Reducer";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {getCaptcha, getIsAuth} from "../../redux/selectors/auth_selectors";
import {AppDispatch} from "../../redux/redux_store";

export const Login = () => {

    const isAuth = useSelector(getIsAuth)
    const captcha = useSelector(getCaptcha)

    const dispatch: AppDispatch = useDispatch()

    const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
        dispatch(logIn(email, password, rememberMe, captcha))
    }

    if(isAuth) {
        return <Navigate to={"/"} />
    }

    return (
        <div >
           <LoginForm  login={login} captcha={captcha}/>
        </div>
    )
}
