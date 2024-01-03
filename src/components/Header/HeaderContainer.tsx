import React, {FC} from "react";
import {logout} from "../../redux/auth_Reducer";
import {connect} from "react-redux";
import HeaderStyle from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";

type PropsTypes = {
    isAuth: boolean
    logout: React.MouseEventHandler<HTMLButtonElement>
}

const HeaderContainer: FC<PropsTypes> = (props) => {
    return (
        <header className={HeaderStyle.header}>
            <span>Social Network</span>
            {props.isAuth
                ? <button onClick={props.logout} className={HeaderStyle.logout}>Log out</button>
                : <NavLink to={'/login'} className={HeaderStyle.loginBlock}>
                </NavLink>
            }
        </header>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
});


export default connect (mapStateToProps, {logout}) (HeaderContainer);