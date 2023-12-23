import React from "react";
import HeaderStyle from './Header.module.css';
import MyImg from './pngwing.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={HeaderStyle.header}>
        {/*<img src={MyImg} alt='1'/>*/}
        <span>Social Network</span>
        {props.isAuth
            ? <button onClick={props.logout} className={HeaderStyle.logout}>Log out</button>
            : <NavLink to={'/login'} className={HeaderStyle.loginBlock}>
            {/*<button className={HeaderStyle.loginBlock}>*/}
            {/*    Login*/}
            {/*</button>*/}
        </NavLink>
        }


    </header>
}

export default Header;