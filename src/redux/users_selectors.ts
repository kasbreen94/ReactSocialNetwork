import {AppStateType} from "./redux_store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

// export const getFollowingInProgress = (state: AppStateType) => {
//     return state.usersPage.followingInProgress
// }
