import React from "react";
import Navbar from "./Navbar/Navbar";
import sidebarStyle from './Sidebar.module.css'
import FriendsBar from "./FriendsBar/FriendsBar";

const Sidebar = (props) => {
    return <div className={sidebarStyle.sidebar}>
        <Navbar navbar={props.sidebar.navbar}/>
        <FriendsBar friends={props.sidebar.friends}/>
    </div>
}

export default Sidebar;