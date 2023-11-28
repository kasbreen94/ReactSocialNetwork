import React from "react";
import HeaderStyle from './Header.module.css';
import MyImg from './pngwing.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={HeaderStyle.header}>
        <img src={MyImg} alt='1'/>
        <span>Social Network</span>
        {props.isAuth
            ? <div className={HeaderStyle.loginBlock}>
                {props.login}
            </div>
            : <NavLink to={'/login'}>
            <div className={HeaderStyle.loginBlock}>
                Login
            </div>
        </NavLink>
        }


    </header>
}

export default Header;