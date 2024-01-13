import {getAuthUserData} from "./auth_Reducer";
import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {initialized: false},
    reducers:{
        initializedSuccess(state) {
            state.initialized = true
        }
    }
})

export const {initializedSuccess} = usersSlice.actions
export default usersSlice.reducer

export const initializeApp = () => (dispatch: any) => {
    Promise.all([dispatch(getAuthUserData())]).then (() => {
        dispatch(initializedSuccess());
    });
}
