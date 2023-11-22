import avatar from "./avatar.svg";

let initialState = {
    navbar: [
        {id: 1, select: 'Profile', address: 'profile', icon: avatar},
        {id: 2, select: 'Messages', address: 'dialogs', icon: avatar},
        {id: 4, select: 'Users', address: 'users', icon: avatar},
        {id: 5, select: 'News', address: 'news', icon: avatar},
        {id: 6, select: 'Music', address: 'music', icon: avatar},
        {id: 7, select: 'Settings', address: 'settings', icon: avatar}
    ],

    friends: [
        {id: 1, avatar: avatar, name: 'Dmitriy'},
        {id: 2, avatar: avatar, name: 'Andrey'},
        {id: 3, avatar: avatar, name: 'Svetlana'},
        {id: 4, avatar: avatar, name: 'Sasha'},
        {id: 5, avatar: avatar, name: 'Viktor'},
        {id: 6, avatar: avatar, name: 'Valera'}
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;