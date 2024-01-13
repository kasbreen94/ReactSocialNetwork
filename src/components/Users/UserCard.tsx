import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import React, {FC} from "react";
import {UsersType} from "../../redux/types/types";
import {AppDispatch, useAppSelector} from "../../redux/redux_store";
import {useDispatch} from "react-redux";
import {followed} from "../../redux/usersSlice";

type PropsTypes = {
    users: UsersType[]
    count: number
}

export const UserCard: FC<PropsTypes> = ({users, count}) => {

    const followingId = useAppSelector(state => state.usersPage.followingId)

    const dispatch: AppDispatch = useDispatch()

    return (
        <>
            {users.slice(0, count).map((u, i) =>
                <div className={s.userItem} key={i}>
                    <span className={s.follow}>
                             <NavLink to={'/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : avatar}
                                     alt=''
                                     className={s.userPhoto}/>
                             </NavLink>
                                <button className={`${s.followed} ${u.followed && s.followed_unfollow}`}
                                        disabled={followingId === u.id}
                                        onClick={() => dispatch(followed(u.id))}>
                                         {u.followed ? "Unfollow" : "Follow"}
                                 </button>
                     </span>
                    <div className={s.info}>
                        <div>
                            <span>Name: </span>{u.name}
                        </div>
                        <div>
                            <span>Followed:</span>
                            <div className={`${s.stateFollow} ${!u.followed && s.stateUnfollow}`}></div>
                        </div>
                        <span>User id: </span>{u.id}
                    </div>
                    {u.status !== null && <div className={s.description}>
                        <span>Status: </span>{u.status}</div>}
                </div>
            )}
        </>
    )
}