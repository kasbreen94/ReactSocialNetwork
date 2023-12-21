import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {follow, requestUsers, toggleFollowingProgress, unfollow} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {getFollowingInProgress, getUsers,} from "../../redux/users_selectors";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";

const UsersContainer = (props) => {
    const [page, setPage] = useState(props.count);

    useEffect(() => {
        props.requestUsers(page);
    }, [page]);

    return (
        <div className={s.users}>
            {props.users.map(u =>
                <div className={s.userItem} key={u.id}>
                        <span className={s.follow}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar}
                                     alt=''
                                     className={s.userPhoto}/>
                                    </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              className={s.followed}
                                              onClick={() => props.unfollow(u.id)
                                              }>
                                        Unfollow
                                    </button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              className={`${s.followed} ${s.followed_follow}`}
                                              onClick={() => props.follow(u.id)}>
                                        Follow
                                    </button>}
                            </div>
                        </span>
                    <span className={s.info}>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                        </span>
                </div>
            )}
            <div>
                    <button
                        onClick={() => setPage(page => page + 6)} className={s.showMore} disabled={props.loading}>
                        {props.loading ? "Loading..." : "Load More"}
                    </button>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        count: state.usersPage.count,
        loading: state.usersPage.loading,
        users: getUsers(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, toggleFollowingProgress,requestUsers})(UsersContainer);