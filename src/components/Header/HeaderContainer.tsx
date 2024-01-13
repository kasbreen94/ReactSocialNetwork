import React from "react";
import {logout} from "../../redux/auth_Reducer";
import {useDispatch, useSelector} from "react-redux";
import s from "./Header.module.css";
import {Navigate, NavLink} from "react-router-dom";
import {AppDispatch} from "../../redux/redux_store";
import {getIsAuth} from "../../redux/selectors/auth_selectors";
import {Navbar} from "./Navbar/Navbar";

export const HeaderContainer = () => {

    const isAuth = useSelector(getIsAuth)

    const dispatch: AppDispatch = useDispatch()

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


