import React, {FC} from "react";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth_Reducer";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginFormHooks";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchToPropsType = {
    logIn: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Login: FC<PropsType> = (props) => {

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div >
           <LoginForm  login={props.logIn} captcha={props.captcha}/>
        </div>
    )
}



const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
});

export default connect (mapStateToProps, {logIn})(Login);