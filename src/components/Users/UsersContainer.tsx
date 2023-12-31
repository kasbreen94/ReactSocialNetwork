import React, {FC,  useEffect, useState} from "react";
import {connect} from "react-redux";
import {followed, requestUsers} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {getFollowingInProgress, getUsers,} from "../../redux/users_selectors";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import {UsersType} from "../../redux/types/types";
import {AppStateType} from "../../redux/redux_store";
import {usersAPI} from "../../api/UsersAPI";


type MapStateToPropsType = {
    count: number
    loading: boolean
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    followed: (id: number) => void
    requestUsers(count: number): void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer: FC<PropsType> = (props: PropsType) => {

    const [data, setData] = useState<UsersType[]>([])
    const [count, setCount] = useState(5)

    const getUsers = async (count: number) => {
        const res: any = await usersAPI.getUsers(count)
        setData(res.data.items)
    }

    const [followed, setFollowed] = useState<boolean>(false)
    const [expectation, setExpectation] = useState({userId: null as null | number})

    const followedUser = async (userId: number) => {
        setExpectation({userId: userId})
        let res: any = await usersAPI.getFollowed(userId)
        setFollowed(res.data)
        {res.data === false ? res = await usersAPI.follow(userId) : res = await usersAPI.unfollow(userId)}
        {res.data.resultCode === 0 && setFollowed(!followed)}
        setExpectation({userId: null})
    }

    useEffect(() => {
        getUsers(count)
    }, [count, followed]);

    return (
        <div className={s.users}>
            {data.map((u) =>
                <div className={s.userItem} key={u.id}>
                    <span className={s.follow}>
                             <NavLink to={'/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar}
                                     alt=''
                                     className={s.userPhoto}/>
                             </NavLink>
                                <button className={`${s.followed} ${u.followed && s.followed_unfollow}`}
                                        disabled={expectation.userId === u.id}
                                        onClick={() => followedUser(u.id)}>
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