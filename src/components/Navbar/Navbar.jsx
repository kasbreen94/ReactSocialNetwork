import React from "react";
import NavbarStyle from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? NavbarStyle.active : NavbarStyle.item

const Navbar = (props) => {

    let navbarElement =
        props.navbar.map(nav => <li className={NavbarStyle.item}><NavLink to={"/" + nav.address}
                                                                    className={activeLink}>{nav.select}</NavLink></li>)

    return <nav className={NavbarStyle.nav}>
        <ul>
            {navbarElement}
        </ul>
    </nav>
}

export default Navbar;