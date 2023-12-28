import {usersAPI} from "../api/api";
import {PhotosType, UsersType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux_store";


const FOLLOWED = 'FOLLOWED';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const LOADING = "LOADING"

let initialState = {
    users: [] as Array<UsersType>,
    loading: false as boolean,
    count: 5 as number,
    followingInProgress: [] as Array<number>,
    isFetching: true as boolean
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case LOADING: {
            return {...state, loading: action.loading}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

type ActionsTypes = FollowSuccessActionType | SetUsersActionType | LoadingUsersActionType
    | ToggleIsFetchingActionType | ToggleFollowingProgressActionType

type FollowSuccessActionType = {
    type: typeof FOLLOWED
    userId: number
}
type SetUsersActionType = {
    type: typeof  SET_USERS
    users: Array<UsersType>
}
type LoadingUsersActionType = {
    type: typeof LOADING
    loading: boolean
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const followedSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOWED, userId})
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users})
export const loadingUsers = (loading: boolean): LoadingUsersActionType => ({type: LOADING, loading})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (count: number): ThunkType => async (dispatch) => {
    dispatch(loadingUsers(true))
    let response = await usersAPI.getUsers(count);
    dispatch(loadingUsers(false))
    dispatch(setUsers(response.data.items));
}

export const followed = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.getUserFollowed(userId)
    {response.data === false ? response = await usersAPI.postUserFollow(userId) : response = await usersAPI.deleteUserUnfollow(userId)}
    {response.data.resultCode === 0 && dispatch(followedSuccess(userId))}

    dispatch(toggleFollowingProgress(false, userId));
}

export default usersReducer;