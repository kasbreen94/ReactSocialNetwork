import React from "react";
import friendsBarStyle from './FriendsBar.module.css'
import {NavLink} from "react-router-dom";
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";

const activeLink = ({isActive}) => isActive ? friendsBarStyle.active : friendsBarStyle.item

const FriendsBar = (props) => {

    const friendsElement =
        props.friends.map (friend => <FriendsBarItem
            avatar={friend.avatar}
            name={friend.name} key={friend.id}/>)

    return (
        <nav className={friendsBarStyle.friends}>
            <div className={friendsBarStyle.item}>
                <NavLink to='/friends' className={activeLink}>Friends</NavLink>
                <span>Online</span>
            </div>
            <div className={friendsBarStyle.line}></div>
            {friendsElement}
        </nav>

    )
}

export default FriendsBar;