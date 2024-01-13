import {UsersType} from "./types/types";
import {usersAPI} from "../api/usersAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type FilterType = {
    term: string
    friend: null | boolean
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [] as UsersType[],
        loading: false as boolean,
        page: 1 as number,
        totalCount: 0 as number,
        followingId: null as null | number,
        filter: {
            term: '' as string,
            friend: null as null | boolean
        }
    },
    reducers:{
        setUsers(state, action: PayloadAction<UsersType[]>) {
            state.users = action.payload
        },
        loadingUsers(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        totalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },
        currentPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        followedSuccess(state, action: PayloadAction<number>) {
           state.users.map(u => {
               if (u.id === action.payload) u.followed = !u.followed
           })
        },
        toggleFollowingProgress(state, action: PayloadAction<number | null>) {
            state.followingId = action.payload
        },
        setFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload
        }
    }
})

export const {currentPage, setUsers, loadingUsers,
    totalCount, followedSuccess, toggleFollowingProgress, setFilter} = usersSlice.actions
export default usersSlice.reducer

export const requestUsers = (page: number, filter: FilterType) => async (dispatch:any) => {
    dispatch(loadingUsers(true))
    dispatch(setFilter(filter))
    dispatch(currentPage(page))
    let data = await usersAPI.getUsers(page, filter.term, filter.friend)
    dispatch(setUsers(data.items))
    dispatch(totalCount(data.totalCount))
    dispatch(loadingUsers(false))
}

export const followed = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(userId));
    let data = await usersAPI.getFollowed(userId)
    {data === false ? data = await usersAPI.follow(userId) : data = await usersAPI.unfollow(userId)}
    {data.resultCode === 0 && dispatch(followedSuccess(userId))}
    dispatch(toggleFollowingProgress(null));
}
