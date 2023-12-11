import React from 'react';
import {useForm} from "react-hook-form";
import s from './Login.module.css'

export const LoginForm = (props) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm}>
            <h2>Sign Up</h2>
            <input placeholder="enter your email" type="email"
                      {...register("email", {
                          required: "enter your email",
                          minLength: {
                              value: 5,
                              message: 'min 5 symbols'
                          }
                      })}/>
            <div >
                {errors?.email && <p className={s.error}>{errors?.email?.message || "Error!"}</p>}
            </div>
            <input placeholder="enter your password" type="password"
                   {...register("password", {
                       required: "enter your password",
                       minLength: {
                           value: 5,
                           message: 'min 5 symbols'
                       }
                   })}/>
            <div >
                {errors?.password && <p className={s.error}>{errors?.password?.message || "Error!"}</p>}
            </div>
            <div>
                <input className={s.checkbox} type="checkbox" placeholder="remember me"
                       {...register("rememberMe", {
                       })}/>
                remember me
            </div>
            <button type="submit" disabled={!isValid} className={s.login}>Login</button>

        </form>
    )
}