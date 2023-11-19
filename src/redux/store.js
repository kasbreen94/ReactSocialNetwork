import avatar from './avatar.svg'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        sidebar: {
            navbar: [
                {id: 1, select: 'Profile', address: 'profile', icon: avatar},
                {id: 2, select: 'Messages', address: 'dialogs', icon: avatar},
                {id: 3, select: 'News', address: 'news', icon: avatar},
                {id: 4, select: 'Music', address: 'music', icon: avatar},
                {id: 5, select: 'Settings', address: 'settings', icon: avatar}
            ],

            friends: [
                {id: 1, avatar: avatar, name: 'Dmitriy'},
                {id: 2, avatar: avatar, name: 'Andrey'},
                {id: 3, avatar: avatar, name: 'Svetlana'},
                {id: 4, avatar: avatar, name: 'Sasha'},
                {id: 5, avatar: avatar, name: 'Viktor'},
                {id: 6, avatar: avatar, name: 'Valera'}
            ]
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'tincidunt nunc pulvinar sapien ettincidunt ' +
                        'nunc pulvinar sapien ettincidunt nunc pulvinar ' +
                        'sapien ettincidunt nunc pulvinar sapien ettincidunt ' +
                        'nunc pulvinar sapien ettincidunt nunc pulvinar ' +
                        'sapien ettincidunt nunc pulvinar sapien ettincidunt' +
                        ' nunc pulvinar sapien et',
                    like: 13
                },
                {
                    id: 2,
                    message: 'tellus molestie nunc non blandittellus ' +
                        'molestie nunc non blandittellus molestie nunc ' +
                        'non blandittellus molestie nunc non ' +
                        'blanditblandittellus molestie nunc non ' +
                        'blanditblandittellus molestie nunc non ' +
                        'blanditblandittellus molestie nunc non blandit',
                    like: 3
                }
            ],
            newPostText: 'Напишите текст...'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'tincidunt nunc pulvinar sapien et'},
                {id: 2, message: 'tellus molestie nunc non blandit'},
                {id: 3, message: 'donec ac odio tempor orci'},
                {id: 4, message: 'lacus sed viverra tellus in'},
                {id: 5, message: 'mauris a diam maecenas sed'},
                {id: 6, message: 'euismod quis viverra nibh cras'}
            ],
            newMessageText: 'Напишите текст...',

            dialogs: [
                {id: 1, name: 'Dmitriy', avatar: avatar},
                {id: 2, name: 'Andrey', avatar: avatar},
                {id: 3, name: 'Svetlana', avatar: avatar},
                {id: 4, name: 'Sasha', avatar: avatar},
                {id: 5, name: 'Viktor', avatar: avatar},
                {id: 6, name: 'Valera', avatar: avatar}
            ]
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;