import React from "react";
import styleLogin from './Login.module.css'
import styleForm from '../../components/common/FormsControls/FormsControls.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_Reducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className={styleLogin.loginForm}>
                <h1> Login</h1>
                <div>
                    <Field component={Input} name={"email"}
                           placeholder={"Email"} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={"password"} type={"password"}
                           placeholder={"Password"} validate={[required]}/>
                </div>
                <div>
                    remember me
                    <Field component={Input} name={"rememberMe"}
                           className={styleLogin.checkbox} type={"checkbox"}
                           validate={[required]}
                    />
                </div>
                {props.error && <div className={styleForm.errorForm}>
                    {props.error}
                </div>}
                <div >
                    <button className={styleLogin.login}>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div >
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {login})(Login);