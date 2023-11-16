import React from "react";
import friendsBarStyle from '../FriendsBar.module.css'

const FriendsBarItem = (props) => {
    return (
        <div className={friendsBarStyle.friend}>
            <img src={props.avatar} alt=""/>
            <span>{props.name}</span>
        </div>

    )
}

export default FriendsBarItem;