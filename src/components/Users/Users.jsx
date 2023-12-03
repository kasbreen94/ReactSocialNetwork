import React from "react";
import usersStyle from "./Users.module.css";
import avatar from "../../redux/avatar.svg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <div>
            <div className={usersStyle.numberPage}>
                {slicedPages.map(p => {
                    return <span className={props.currentPage === p ? usersStyle.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
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
            )
            }
        </div>
    )
}

export default Users;