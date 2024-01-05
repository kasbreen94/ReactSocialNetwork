import {Action, applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth_Reducer";
import {thunk as thunkMiddleware, ThunkAction, ThunkDispatch} from "redux-thunk";
import app_Reducer from "./app_Reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: app_Reducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export type AppDispatch = ThunkDispatch<AppStateType, unknown, Action>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store

export default store