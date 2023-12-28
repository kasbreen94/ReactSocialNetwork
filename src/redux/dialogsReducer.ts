// @ts-ignore
import avatar from "../assets/images/avatar.svg";

const ADD_MESSAGE = 'dialogs/ADD_MESSAGE'

type MessageType = {
    id: number
    name: string
    avatar: string | null
}

type DialogType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'tincidunt nunc pulvinar sapien et'},
        {id: 2, message: 'tellus molestie nunc non blandit'},
        {id: 3, message: 'donec ac odio tempor orci'},
        {id: 4, message: 'lacus sed viverra tellus in'},
        {id: 5, message: 'mauris a diam maecenas sed'},
        {id: 6, message: 'euismod quis viverra nibh cras'}
    ] as Array<DialogType>,
    dialogs: [
        {id: 1, name: 'Dmitriy', avatar: avatar},
        {id: 2, name: 'Andrey', avatar: avatar},
        {id: 3, name: 'Svetlana', avatar: avatar},
        {id: 4, name: 'Sasha', avatar: avatar},
        {id: 5, name: 'Viktor', avatar: avatar},
        {id: 6, name: 'Valera', avatar: avatar}
    ] as Array<MessageType>
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.newMessage}]
            };
        }
        default:
            return state;
    }
}

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessage: string
}

export const addMessage = (newMessage: string): AddMessageActionType => ({type: ADD_MESSAGE, newMessage})

export default dialogsReducer;