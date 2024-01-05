import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FilterType, followed, requestUsers} from "../../redux/usersReducer";
import s from "./users.module.css";
import {AppDispatch} from "../../redux/redux_store";
import {UsersSearchForm} from "./UsersSearchForm";
import {UpperBlockPagination} from "./UsersPagination/UpperBlockPagination";
import {LowerBlockPagination} from "./UsersPagination/LowerBlockPagination";
import {UserCard} from "./UserCard";
import {
    getFilter,
    getFollowingId,
    getLoading,
    getPage,
    getTotalCount,
    getUsers
} from "../../redux/selectors/users_selectors";
// import {useLocation, useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

export const UsersContainer = React.memo(() => {

    const users = useSelector(getUsers)
    const totalCount = useSelector(getTotalCount)
    const followingId = useSelector(getFollowingId)
    const page = useSelector(getPage)
    const loading = useSelector(getLoading)
    const filter = useSelector(getFilter)

    const dispatch: AppDispatch = useDispatch()

    const reqUsers = (currentPage: number, filter: FilterType) => {
        dispatch(requestUsers(currentPage, filter))
    }

    const [count, setCount] = useState<number>(4)
    const [currentPage, setCurrentPage] = useState<number>(page)
    const totalPage = Math.ceil(totalCount / 100)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        reqUsers(currentPage, filter)
    }, [currentPage]);

    useEffect(() => {
        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === ''? '' : `&term=${term}`)
        + (friend === null ? '' : `&friend=${friend}`)
        + (currentPage === 1 ? '' : `&page=${currentPage}`)

        setSearchParams(urlQuery)

    }, [filter,currentPage]);

    return (
        <div className={s.users}>
            <div className={s.infoPage}>
                <span>Users per page: 100</span>
                <span>Total pages: {totalPage}</span>
                <span>Total users: {totalCount}</span>
            </div>
            <UpperBlockPagination
                totalPage={totalPage}
                setPage={setCurrentPage}
                page={currentPage}
                setCount={setCount}
                users={users}
                loading={loading}/>
            <UsersSearchForm
                setPage={setCurrentPage}
                requestUsers={reqUsers}
                page={currentPage}/>
            <UserCard
                users={users}
                count={count}/>
            <LowerBlockPagination
                setCurrentPage={setCurrentPage}
                count={count}
                totalPage={totalPage}
                currentPage={currentPage}
                setCount={setCount}
                users={users}
                loading={loading}/>
        </div>
    )
})
