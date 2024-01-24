import profileReducer from "./profileSlice";
import dialogsReducer from "./chatSlice";
import usersSlice from "./usersSlice";
import authSlice from "./authSlice";
import appSlice from "./appSlice";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersSlice,
        auth: authSlice,
        app: appSlice,
    }
})

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

// // @ts-ignore
// window.__store__ = store

export default store