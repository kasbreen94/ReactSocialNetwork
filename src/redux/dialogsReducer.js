import avatar from "./avatar.svg";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;