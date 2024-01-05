import {UsersType} from "./types/types";
import {BaseThunkType, InferActionsTypes} from "./redux_store";
import {usersAPI} from "../api/usersAPI";

type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

let initialState = {
    users: [] as Array<UsersType>,
    loading: false as boolean,
    page: 1 as number,
    totalCount: 0 as number,
    followingId: null as null | number,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOWED':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case 'SN/USERS/SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SN/USERS/FILTER': {
            return {...state, filter: action.payload}
        }
        case 'SN/USERS/TOTAL_COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'SN/USERS/LOADING': {
            return {...state, loading: action.loading}
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {...state, followingId: action.userId}
        }
        default:
            return state;
    }
}

export const actions = {
    followedSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOWED', userId} as const),
    setUsers: (users: Array<UsersType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setFilter: (filter: FilterType) => ({type: 'SN/USERS/FILTER', payload: filter} as const),
    totalCount: (totalCount: number) => ({type: 'SN/USERS/TOTAL_COUNT', totalCount} as const),
    loadingUsers: (loading: boolean) => ({type: 'SN/USERS/LOADING', loading} as const),
    toggleFollowingProgress: (userId: null | number) => (
        {type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', userId} as const)
}

export const requestUsers = (page: number, filter: FilterType): ThunkType => async (dispatch) => {
    dispatch(actions.loadingUsers(true))
    dispatch(actions.setFilter(filter))

    let data = await usersAPI.getUsers(page, filter.term, filter.friend)

    dispatch(actions.setUsers(data.items))
    dispatch(actions.totalCount(data.totalCount))
    dispatch(actions.loadingUsers(false))
}

export const followed = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(userId));
    let data = await usersAPI.getFollowed(userId)
    {data === false ? data = await usersAPI.follow(userId) : data = await usersAPI.unfollow(userId)}
    {data.resultCode === 0 && dispatch(actions.followedSuccess(userId))}
    dispatch(actions.toggleFollowingProgress(null));
}

export default usersReducer;