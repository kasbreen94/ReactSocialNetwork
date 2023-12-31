import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return <nav className={s.nav}>
        {/*<div className={`${s.line} ${s.lineUp}`}></div>*/}
        <ul>
            <div className={`${s.line} ${s.lineUp}`}></div>
            {props.navbar.map(nav =>
                <li className={s.item} key={nav.id}>
                    <img src={nav.icon} alt=""/>
                    <NavLink
                        to={"/" + nav.address}
                        className={({isActive}) => isActive ? s.active : s.inactive}
                    >
                        {nav.select}</NavLink></li>)}
            <div className={s.line}></div>
        </ul>
        {/*<div className={s.line}></div>*/}
    </nav>
}

export default Navbar;