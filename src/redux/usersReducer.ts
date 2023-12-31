import {usersAPI} from "../api/api";
import {PhotosType, UsersType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux_store";

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
        case 'FOLLOWED':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
     followedSuccess: (userId: number) => ({type: 'FOLLOWED', userId}) as const,
     setUsers: (users: Array<UsersType>) => ({type: 'SET_USERS', users}) as const,
     loadingUsers: (loading: boolean) => ({type: 'LOADING', loading}) as const,
     toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}) as const,
     toggleFollowingProgress: (isFetching: boolean, userId: number) => (
        {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId}) as const
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (count: number): ThunkType => async (dispatch) => {
    dispatch(actions.loadingUsers(true))
    let response = await usersAPI.getUsers(count);
    dispatch(actions.loadingUsers(false))
    dispatch(actions.setUsers(response.data.items));
}

export const followed = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await usersAPI.getUserFollowed(userId)
    {response.data === false ? response = await usersAPI.postUserFollow(userId) : response = await usersAPI.deleteUserUnfollow(userId)}
    {response.data.resultCode === 0 && dispatch(actions.followedSuccess(userId))}

    dispatch(actions.toggleFollowingProgress(false, userId));
}

export default usersReducer;