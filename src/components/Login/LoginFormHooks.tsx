import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import s from './Login.module.css'

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    captcha: string | null
}

type LoginFormValueType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const LoginForm: FC<PropsType> = (props) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm<LoginFormValueType>({
        mode: "onBlur"
    });

    const onSubmit = (data: LoginFormValueType) => {
        props.login(data.email, data.password, data.rememberMe, data.captcha)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.loginForm}>
                <h2>Sign Up</h2>
                <input placeholder="enter your email" type="email"
                       {...register("email", {
                           required: "enter your email",
                           minLength: {
                               value: 5,
                               message: 'min 5 symbols'
                           }
                       })}/>
                <div>
                    {errors?.email && <p className={s.error}>{errors?.email?.message || "Error!"}</p>}
                </div>
                <input placeholder="enter your password" type="password"
                       {...register("password", {
                           required: "enter your password",
                           minLength: {
                               value: 3,
                               message: 'min 3 symbols'
                           }
                       })}/>
                <div>
                    {errors?.password && <p className={s.error}>{errors?.password?.message || "Error!"}</p>}
                </div>
                <div>
                    <input className={s.checkbox} type="checkbox" placeholder="remember me"
                           {...register("rememberMe", {})}/>
                    remember me
                </div>

                {props.captcha && <img src={props.captcha} alt=''/>}
                {props.captcha && <input placeholder="enter text captcha"
                                         {...register("captcha", {
                                             required: "enter text captcha",
                                         })}/>}
            </div>

            <button type="submit" disabled={!isValid} className={s.login}>Login</button>

        </form>
    )
}