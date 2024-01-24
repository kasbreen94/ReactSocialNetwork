import {ChatMessageAPIType, dialogsAPI} from "../api/dialogsAPI";
import {Dispatch} from "redux";
import {v1} from 'uuid'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ChatMessageType = ChatMessageAPIType & {id: string}

export type StatusType = 'pending' | 'ready' | 'error'

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        messages: [] as ChatMessageType [],
        status: 'pending' as StatusType
    },
    reducers:{
        messagesReceived(state, action: any) {
                state.messages = [...state.messages, ...action.payload.messages.map( (m: any) => ({...m, id: v1() }))]
                    .filter((m, index, array) => index >= array.length - 100)
        },
        statusChanged(state, action: PayloadAction<StatusType>) {
            state.status = action.payload
        },
        messagesReset(state) {
            state.messages = []
        }
    }
})

const {messagesReceived, statusChanged, messagesReset} = usersSlice.actions
export default usersSlice.reducer

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandler = (dispatch: Dispatch) => {
    if ( _newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            // @ts-ignore
            dispatch(messagesReceived({messages}))
        }
    } return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandler = (dispatch: Dispatch) => {
    if ( _statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    } return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch: any) => {
    dialogsAPI.start()
    dialogsAPI.subscribe('messages-received',  newMessageHandler(dispatch))
    dialogsAPI.subscribe('status-changed',  statusChangedHandler(dispatch))
}

export const stopMessagesListening = () => async (dispatch: any) => {
    dispatch(messagesReset())
    dialogsAPI.unsubscribe('messages-received', newMessageHandler(dispatch))
    dialogsAPI.unsubscribe('status-changed', statusChangedHandler(dispatch))
    dialogsAPI.stop()
}

export const sendMessage = (message: string) => async () => {
    dialogsAPI.sendMessage(message)
}
