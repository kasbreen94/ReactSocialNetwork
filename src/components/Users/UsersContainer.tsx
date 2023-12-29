import React, {FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import { followed, requestUsers} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {getFollowingInProgress, getUsers,} from "../../redux/users_selectors";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import {UsersType} from "../../redux/types/types";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    count: number
    loading: boolean
    isFetching: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    followed: (id: number) => void
    requestUsers(count: number): void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer: FC<PropsType> = (props) => {
    const [count, setCount] = useState(props.count)

    useEffect(() => {
        props.requestUsers(count);
    }, [count]);

    return (
        <div className={s.users}>
            {props.users.map(u =>
                <div className={s.userItem} key={u.id}>
                    <span className={s.follow}>
                        <div>
                            <NavLink to={'/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar}
                                     alt=''
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                            <div>
                                <button className={`${s.followed} ${u.followed && s.followed_follow}`}
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.followed(u.id)}>
                                        {u.followed ? "Unfollow" : "Follow"}
                                </button>
                            </div>
                    </span>
                    <span className={s.info}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </div>
            )}
            <div>
                <button
                    onClick={() => setCount(count => count + 6)} className={s.showMore} disabled={props.loading}>
                    {props.loading ? "Loading..." : "Load More"}
                </button>
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        count: state.usersPage.count,
        loading: state.usersPage.loading,
        isFetching: state.usersPage.isFetching,
        users: getUsers(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps,
    {followed, requestUsers})(UsersContainer);