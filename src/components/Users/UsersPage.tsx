import React, {useEffect, useState} from "react";
import {currentPage, FilterType, requestUsers} from "../../redux/usersSlice";
import s from "./users.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/redux_store";
import {UsersSearchForm} from "./UsersSearchForm";
import {UpperBlockPagination} from "./UsersPagination/UpperBlockPagination";
import {LowerBlockPagination} from "./UsersPagination/LowerBlockPagination";
import {UserCard} from "./UserCard";
import {useSearchParams} from "react-router-dom";


export const UsersContainer = React.memo(() => {

    const {users, totalCount, page, loading, filter} = useAppSelector(state => state.usersPage)

    const dispatch = useAppDispatch()

    const getCurrentPage = (page: number) => {
        dispatch(currentPage(page))
    }

    const reqUsers = (page: number, filter: FilterType) => {

        dispatch(requestUsers({page, filter}))
    }

    const [count, setCount] = useState<number>(4)
    const totalPage = Math.ceil(totalCount / 100)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {

        const parsed = {
            page: searchParams.get("page") as string,
            term: searchParams.get("term") as string,
            friend: searchParams.get("friend") as string
        }

        let actualPage = page
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (actualPage === 0) actualPage = page
        if (parsed.page === null) actualPage = 1

        if (!!parsed.term) {
            actualFilter = {...actualFilter, term: parsed.term}
        } else actualFilter = {...actualFilter, term: ''}

        if (parsed.friend === "null") actualFilter = {...actualFilter, friend: null}
        if (parsed.friend === "true") actualFilter = {...actualFilter, friend: true}
        if (parsed.friend === "false") actualFilter = {...actualFilter, friend: false}
        if (parsed.friend === null) actualFilter = {...actualFilter, friend: null}

        reqUsers(actualPage, actualFilter)

    }, [searchParams]);


    useEffect(() => {
        const term = filter.term
        const friend = filter.friend
        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (page === 1 ? '' : `&page=${page}`)

        setSearchParams(urlQuery)

    }, [filter,page]);

    return (
        <div className={s.users}>
            <div className={s.infoPage}>
                <span>Users per page: 100</span>
                <span>Total pages: {totalPage}</span>
                <span>Total users: {totalCount}</span>
            </div>
            <UpperBlockPagination
                totalPage={totalPage}
                setPage={getCurrentPage}
                page={page}
                setCount={setCount}
                users={users}
                loading={loading}/>
            <UsersSearchForm
                setPage={getCurrentPage}
                requestUsers={reqUsers}
                page={page}/>
            <UserCard
                users={users}
                count={count}/>
            <LowerBlockPagination
                setCurrentPage={getCurrentPage}
                count={count}
                totalPage={totalPage}
                currentPage={page}
                setCount={setCount}
                users={users}
                loading={loading}/>
        </div>
    )
})
