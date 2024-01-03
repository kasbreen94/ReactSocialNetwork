import React, {FC} from "react";
import avatar from "../../../assets/images/avatar.svg";
import friendsBarStyle from './FriendsBar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../../redux/sidebarReducer";

type PropsTypes = {
    friends: FriendsType[]
}

const FriendsBar: FC<PropsTypes> = (props) => {

    return (
        <nav className={friendsBarStyle.friends}>
            <div className={friendsBarStyle.item}>
                <NavLink to='/friends'
                         className={({isActive}) => isActive ? friendsBarStyle.active : friendsBarStyle.item}>Friends</NavLink>
                <span>Online</span>
            </div>
            {props.friends.map(friend =>
                <div className={friendsBarStyle.friend} key={friend.id}>
                    <img src={friend.avatar ? friend.avatar : avatar } alt=""/>
                    <span>{friend.name}</span>
                </div>
            )}
        </nav>

    )
}

export default FriendsBar;