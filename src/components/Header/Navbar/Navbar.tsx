import React, {FC, useState} from "react";
import avatar from "../../../assets/images/avatar.svg";
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

type NavbarType = {
    id: number
    select: string
    address: string
    icon: string
}

 export const Navbar = () => {

     const [navbar] = useState<NavbarType[]>([
         {id: 1, select: 'Profile', address: '', icon: avatar},
         // {id: 2, select: 'Messages', address: 'dialogs', icon: avatar},
         {id: 2, select: 'Users', address: 'users', icon: avatar}
     ])

    return (
        <nav className={s.nav}>
            <ul className={s.itemsNav}>
                {navbar.map(nav =>
                    <li className={s.item} key={nav.id}>
                        <img src={nav.icon} alt=''/>
                        <NavLink
                            to={"/" + nav.address}
                            className={({isActive}) => isActive ? s.active : s.inactive}>
                            {nav.select}
                            <div className={s.line}></div>
                        </NavLink></li>)}
            </ul>
        </nav>
    )
}