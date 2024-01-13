import {AppStateType} from "../redux_store";

export const getMessages = (state: AppStateType) => {
    return state.dialogsPage.messages
}
export const getStatusCh = (state: AppStateType) => {
    return state.dialogsPage.status
}
