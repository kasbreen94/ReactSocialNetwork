import {AppStateType} from "../redux_store";

export const getPosts = (state: AppStateType) => {
    return state.profilePage.posts
}
export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile
}
export const getStatus = (state: AppStateType) => {
    return state.profilePage.status
}
