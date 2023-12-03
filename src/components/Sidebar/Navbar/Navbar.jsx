import React from "react";
import NavbarStyle from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return <nav className={NavbarStyle.nav}>
        <ul>
            {props.navbar.map(nav =>
                <li className={NavbarStyle.item} key={nav.id}>
                    <img src={nav.icon} alt=""/>
                    <NavLink
                        to={"/" + nav.address}
                        className={({isActive}) => isActive ? NavbarStyle.active : NavbarStyle.item}>
                        {nav.select}</NavLink></li>)}
        </ul>
    </nav>
}

export default Navbar;