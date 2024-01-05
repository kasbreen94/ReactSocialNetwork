import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../redux/auth_Reducer";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {getCaptcha, getIsAuth} from "../../redux/selectors/auth_selectors";

export const Login = () => {

    const isAuth = useSelector(getIsAuth)
    const captcha = useSelector(getCaptcha)

    const dispatch = useDispatch()

    const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
        // @ts-ignore
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
