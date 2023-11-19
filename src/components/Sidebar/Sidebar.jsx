import React from "react";
import sidebarStyle from './Sidebar.module.css'
import NavbarContainer from "./Navbar/NavbarConteiner";
import FriendsBarContainer from "./FriendsBar/FriendsBarContainer";

const Sidebar = (props) => {
    return <div className={sidebarStyle.sidebar}>
        <NavbarContainer
            // navbar={props.sidebar.navbar}
        />
        <FriendsBarContainer
            // friends={props.sidebar.friends}
        />
    </div>
}

export default Sidebar;