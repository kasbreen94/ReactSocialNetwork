import {BaseThunkType, InferActionsTypes} from "./redux_store";
import {ChatMessageAPIType, dialogsAPI} from "../api/dialogsAPI";
import {Dispatch} from "redux";
import {v1} from 'uuid'

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes>

type ChatMessageType = ChatMessageAPIType & {id: string}

export type StatusType = 'pending' | 'ready' | 'error'

let initialState = {
    messages: [] as ChatMessageType [],
    status: 'pending' as StatusType
}

const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/MESSAGE_RECEIVED': {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
            };
        }
        case 'SN/DIALOGS/MESSAGE_RESET': {
            return {...state, messages: []}
        }
        case 'SN/DIALOGS/STATUS_CHANGED': {
            return {
                ...state,
                status: action.payload.status
            };
        }
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageAPIType[]) => ({type: 'SN/DIALOGS/MESSAGE_RECEIVED', payload: {messages}} as const),
    statusChanged: (status: StatusType) => ({type: 'SN/DIALOGS/STATUS_CHANGED', payload: {status}} as const),
    messagesReset: () => ({type: 'SN/DIALOGS/MESSAGE_RESET'} as const)
}


let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandler = (dispatch: Dispatch) => {
    if ( _newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    } return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandler = (dispatch: Dispatch) => {
    if ( _statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    } return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    dialogsAPI.start()
    dialogsAPI.subscribe('messages-received',  newMessageHandler(dispatch))
    dialogsAPI.subscribe('status-changed',  statusChangedHandler(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    dispatch(actions.messagesReset())
    dialogsAPI.unsubscribe('messages-received', newMessageHandler(dispatch))
    dialogsAPI.unsubscribe('status-changed', statusChangedHandler(dispatch))
    dialogsAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    dialogsAPI.sendMessage(message)
}

export default dialogsReducer;