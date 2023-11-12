import React from "react";
import HeaderStyle from './Header.module.css';
import MyImg from './pngwing.png'

const Header = () => {
    return <header className={HeaderStyle.header}>
            <img src={MyImg} alt='1'/>
            <span>Social Network</span>
        </header>
}

export default Header;