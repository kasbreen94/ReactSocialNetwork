import React from "react";
import NavbarStyle from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    const activeLink = ({isActive}) => isActive ? NavbarStyle.active : NavbarStyle.item

    let navbarElement =
        props.navbar.map(nav =>
            <li className={NavbarStyle.item} key={nav.id}>
                <img src={nav.icon} alt=""/>
                <NavLink
                    to={"/" + nav.address}
                    className={activeLink}>
                    {nav.select}</NavLink></li>)

    return <nav className={NavbarStyle.nav}>
        <ul>
            {navbarElement}
        </ul>
    </nav>
}

export default Navbar;