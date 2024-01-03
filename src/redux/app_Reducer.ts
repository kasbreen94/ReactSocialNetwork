import {getAuthUserData} from "./auth_Reducer";
import {BaseThunkType, InferActionsTypes} from "./redux_store";

export type InitialStateType  = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsTypes) : InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    Promise.all([dispatch(getAuthUserData())]).then (() => {
        dispatch(actions.initializedSuccess());
    });
}

export default appReducer;