import React from "react";
import friendsBarStyle from './FriendsBar.module.css'
import {NavLink} from "react-router-dom";

const FriendsBar = (props) => {

    return (
        <nav className={friendsBarStyle.friends}>
            <div className={friendsBarStyle.item}>
                <NavLink to='/friends'
                         className={({isActive}) => isActive ? friendsBarStyle.active : friendsBarStyle.item}>Friends</NavLink>
                <span>Online</span>
            </div>
            <div className={friendsBarStyle.line}></div>
            {props.friends.map(friend =>
                <div className={friendsBarStyle.friend} key={friend.id}>
                    <img src={friend.avatar} alt=""/>
                    <span>{friend.name}</span>
                </div>
            )}
        </nav>

    )
}

export default FriendsBar;