import React from "react";
import {logout} from "../../redux/authSlice";
import s from "./Header.module.css";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Navbar} from "./Navbar/Navbar";

export const HeaderContainer = () => {

    const isAuth = useAppSelector(state => state.auth.auth.isAuth)

    const dispatch = useAppDispatch()

    if (!isAuth)
        return <Navigate to='/login'/>

    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <span>Social Network</span>
                <Navbar/>
                <button onClick={() => dispatch(logout())} className={s.logout}>Log out</button>
            </div>
        </header>
    )
}


