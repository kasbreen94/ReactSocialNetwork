import React, {FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import {followed, requestUsers} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import {UsersType} from "../../redux/types/types";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    loading: boolean
    users: UsersType[]
    followingId: number | null
    totalCount: number
}

type MapDispatchToPropsType = {
    followed: (userId: number) => void
    requestUsers(page: number): void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer: FC<PropsType> = (props: PropsType) => {

    const [count, setCount] = useState<number>(5)
    const [page, setPage] = useState<number>(1)
    const totalPage = Math.ceil(props.totalCount / 100)

    const getPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const n = Number(e.target.value)
        setPage(n)
    }

    useEffect(() => {
      props.requestUsers(page)
    }, [page]);

    return (
        <div className={s.users}>
            <div className={s.infoPage}>
                <span>Total users: {props.totalCount}</span>
                <span>Total pages: {totalPage}</span>
                <span>Total users per page: 100</span>
            </div>
            <div className={s.pagination}>
                 <button
                    onClick={() => setPage(page - 1)} className={s.showMore} disabled={page === 1}>
                    PrevPage
                </button>
                <label>
                    Page:
                    <input className={s.numberPage} value={page} onChange={getPage}/>
                </label>
                <button
                    onClick={() => {setPage(page + 1); setCount(5)}} className={s.showMore} disabled={props.loading}>
                    NextPage
                </button>
            </div>
            {props.users.slice(0, count).map((u, i) =>
                <div className={s.userItem} key={i}>
                    <span className={s.follow}>
                             <NavLink to={'/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : avatar}
                                     alt=''
                                     className={s.userPhoto}/>
                             </NavLink>
                                <button className={`${s.followed} ${u.followed && s.followed_unfollow}`}
                                        disabled={props.followingId === u.id}
                                        onClick={() => props.followed(u.id)}>
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
            <div >
                {count < 100 && <button
                    onClick={() => setCount(count + 5)} className={s.showMore} disabled={props.loading}>
                    {props.loading ? "Loading..." : "Load More"}
                </button>}
                {count === 100 &&
                    <div className={s.pagination}>
                        <button
                            onClick={() => {setPage(page - 1);setCount(5)}}
                            className={s.showMore} disabled={page === 1}>
                            PrevPage
                        </button>
                        <input className={s.showMore} value={page} onChange={getPage}/>
                        <button
                            onClick={() => {setPage(page + 1); setCount(5)}}
                            className={s.showMore} disabled={props.loading}>
                            NextPage
                        </button>
                    </div>}
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        loading: state.usersPage.loading,
        users: state.usersPage.users,
        followingId: state.usersPage.followingId,
        totalCount: state.usersPage.totalCount,
    }
}

export default connect(mapStateToProps,
    {followed, requestUsers})(UsersContainer) as React.ComponentType