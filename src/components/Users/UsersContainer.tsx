import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, FilterType, requestUsers} from "../../redux/usersReducer";
import s from "./users.module.css";
import {AppDispatch} from "../../redux/redux_store";
import {UsersSearchForm} from "./UsersSearchForm";
import {UpperBlockPagination} from "./UsersPagination/UpperBlockPagination";
import {LowerBlockPagination} from "./UsersPagination/LowerBlockPagination";
import {UserCard} from "./UserCard";
import {getFilter, getLoading, getPage, getTotalCount, getUsers} from "../../redux/selectors/users_selectors";
import {useSearchParams} from "react-router-dom";


export const UsersContainer = React.memo(() => {

    const users = useSelector(getUsers)
    const totalCount = useSelector(getTotalCount)
    const page = useSelector(getPage)
    const loading = useSelector(getLoading)
    const filter = useSelector(getFilter)

    const dispatch: AppDispatch = useDispatch()

    const getCurrentPage = (page: number) => {
        dispatch(actions.setCurrentPage(page))
    }

    const reqUsers = (page: number, filter: FilterType) => {
        dispatch(requestUsers(page, filter))
    }

    const [count, setCount] = useState<number>(4)
    // const [currentPage, setCurrentPage] = useState<number>(page)
    const totalPage = Math.ceil(totalCount / 100)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {

        const parsed = {
            page: searchParams.get("page") as string,
            term: searchParams.get("term") as string,
            friend: searchParams.get("friend") as string
        }


        // const parsedPage: string | null = searchParams.get("page")
        // const parsedTerm: string | null = searchParams.get("term")
        // const parsedFriend: string | null | boolean = searchParams.get("friend")

        let actualPage = page
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}
        if (parsed.friend === "null") actualFilter = {...actualFilter, friend: null}
        if (parsed.friend === "true") actualFilter = {...actualFilter, friend: true}
        if (parsed.friend === "false") actualFilter = {...actualFilter, friend: false}
        // switch (parsedFriend) {
        //     case 'null':
        //         actualFilter = {...actualFilter, friend: null}
        //         break
        //     case 'true':
        //         actualFilter = {...actualFilter, friend: true}
        //         break
        //     case 'false':
        //         actualFilter = {...actualFilter, friend: false}
        //         break
        // }

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
