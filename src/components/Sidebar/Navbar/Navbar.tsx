import React, {FC} from "react";
import avatar from "../../../assets/images/avatar.svg";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {NavbarType} from "../../../redux/sidebarReducer";

type PropsTypes = {
    navbar: NavbarType[]
}

const Navbar: FC<PropsTypes> = (props) => {

    return <nav className={s.nav}>
        <ul>
            <div className={`${s.line} ${s.lineUp}`}></div>
            {props.navbar.map(nav =>
                <li className={s.item} key={nav.id}>
                    <img src={nav.icon ? nav.icon : avatar} alt=""/>
                    <NavLink
                        to={"/" + nav.address}
                        className={({isActive}) => isActive ? s.active : s.inactive}
                    >
                        {nav.select}</NavLink></li>)}
            <div className={s.line}></div>
        </ul>
    </nav>
}

export default Navbar;