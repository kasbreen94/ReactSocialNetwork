import {AppStateType} from "../redux_store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}
export const getFollowingId = (state: AppStateType) => {
    return state.usersPage.followingId
}
export const getPage = (state: AppStateType) => {
    return state.usersPage.page
}
export const getLoading = (state: AppStateType) => {
    return state.usersPage.loading
}
export const getFilter = (state: AppStateType) => {
    return state.usersPage.filter
}
