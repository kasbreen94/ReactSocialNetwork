import React, {useState} from "react";
import usersStyle from "./Users.module.css";
import avatar from "../../assets/images/avatar.svg";
import {NavLink} from "react-router-dom";

let UsersCard = (props) => {

    return (
            <div>
                {props.users.map(u =>
                    <div className={usersStyle.userItem} key={u.id}>
                        <span className={usersStyle.follow}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar}
                                     alt=''
                                     className={usersStyle.userPhoto}/>
                                    </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              className={usersStyle.followed}
                                              onClick={() => {
                                                  props.unfollow(u.id)
                                              }}>
                                        Unfollow
                                    </button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              className={`${usersStyle.followed} ${usersStyle.followed_follow}`}
                                              onClick={() => {
                                                  props.follow(u.id)
                                              }}>
                                        Follow
                                    </button>}
                            </div>
                        </span>
                        <span className={usersStyle.info}>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                        </span>
                    </div>
                )}
            </div>
    )
}

export default UsersCard;