// @ts-ignore
import avatar from "../assets/images/avatar.svg";
import {BaseThunkType, InferActionsTypes} from "./redux_store";

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
    avatar: string | null
}

let initialState = {
    messages: [] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Dmitriy', avatar: avatar},
        {id: 2, name: 'Andrey', avatar: avatar},
        {id: 3, name: 'Svetlana', avatar: avatar},
        {id: 4, name: 'Sasha', avatar: avatar},
        {id: 5, name: 'Viktor', avatar: avatar},
        {id: 6, name: 'Valera', avatar: avatar}
    ] as Array<DialogType>
}

const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/ADD_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.newMessage}]
            };
        }
        default:
            return state;
    }
}

export const actions = {
    addMessage: (newMessage: string) => ({type: 'SN/DIALOGS/ADD_MESSAGE', newMessage} as const)
}

export default dialogsReducer;