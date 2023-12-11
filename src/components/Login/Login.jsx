import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth_Reducer";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginFormHooks";

const Login = (props) => {

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div >
           <LoginForm  login={props.login}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {login})(Login);