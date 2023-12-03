import React from "react";
import sidebarStyle from './Sidebar.module.css'
import FriendsBar from "./FriendsBar/FriendsBar";
import Navbar from "./Navbar/Navbar";


const Sidebar = (props) => {
    return <div className={sidebarStyle.sidebar}>
        <Navbar navbar={props.navbar}/>
        <FriendsBar friends={props.friends}/>
    </div>
}

export default Sidebar;