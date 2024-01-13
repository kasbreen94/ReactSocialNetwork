import React, {lazy, Suspense, useEffect} from "react";
import './App.css';
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {initializeApp} from "./redux/appSlice";
import {useDispatch} from "react-redux";
import Preloader from "./components/common/preloader/preloader";
import {AppDispatch, useAppSelector} from "./redux/redux_store";
import {Login} from "./components/Login/Login";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

// const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer')
//     .then(promise=> ({ default: promise.DialogsContainer })));
const UsersContainer = lazy(() =>  import('./components/Users/UsersContainer')
    .then(promise=> ({ default: promise.UsersContainer })));

export const App = () => {

    const initialize = useAppSelector(state => state.app.initialized)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, []);

    if (!initialize) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <DialogsContainer/>
            <div className='app-wrapper-content'>
                <Suspense fallback={<div><Preloader/></div>}>
                    <Routes>
                        {/*<Route path="*" element={<Navigate to={"/"}/>}/>*/}
                        {/*<Route path="/" element={<Navigate to={"profile/"}/>}/>*/}
                        <Route path="/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/*" element={<ProfileContainer/>}/>
                        {/*<Route path="/dialogs/*" element={<DialogsContainer/>}/>*/}
                        <Route path="/login/*" element={<Login/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}