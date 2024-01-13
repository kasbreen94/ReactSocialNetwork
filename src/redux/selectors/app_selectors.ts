import {AppStateType} from "../redux_store";

export const getInitialized= (state: AppStateType) => {
    return state.app.initialized
}
