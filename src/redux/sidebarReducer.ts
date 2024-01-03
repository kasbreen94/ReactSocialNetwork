// @ts-ignore
import avatar from "../assets/images/avatar.svg";
import {InferActionsTypes} from "./redux_store";
import {actions} from "./profileReducer";

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export type NavbarType = {
    id: number
    select: string
    address: string
    icon: string | null
}
export type FriendsType = {
    id: number
    avatar: string | null
    name: string
}

let initialState = {
    navbar: [
        {id: 1, select: 'Profile', address: '', icon: avatar},
        {id: 2, select: 'Messages', address: 'dialogs', icon: avatar},
        {id: 4, select: 'Users', address: 'users', icon: avatar},
        {id: 5, select: 'News', address: 'news', icon: avatar},
        {id: 6, select: 'Music', address: 'music', icon: avatar},
        {id: 7, select: 'Settings', address: 'settings', icon: avatar}
    ] as Array<NavbarType>,

    friends: [
        {id: 1, avatar: avatar, name: 'Dmitriy'},
        {id: 2, avatar: avatar, name: 'Andrey'},
        {id: 3, avatar: avatar, name: 'Svetlana'},
        {id: 4, avatar: avatar, name: 'Sasha'},
        {id: 5, avatar: avatar, name: 'Viktor'},
        {id: 6, avatar: avatar, name: 'Valera'}
    ] as Array<FriendsType>
}

const sidebarReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    return state;
}

export default sidebarReducer;