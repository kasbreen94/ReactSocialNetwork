import React, {FC, lazy, Suspense, useEffect} from "react";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {initializeApp} from "./redux/app_Reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/preloader";
import {AppStateType} from "./redux/redux_store";
import {Login} from "./components/Login/Login";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
// import {UsersContainer} from "./components/Users/UsersContainer";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() =>  import('./components/Users/UsersContainer')
    .then(promise=> ({ default: promise.UsersContainer })));

type PropsTypes = {
    initialized: boolean
    initializeApp: () => void
}

const App: FC<PropsTypes> = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, []);

    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <SidebarContainer/>
            <div className='app-wrapper-content'>
                <Suspense fallback={<div><Preloader/></div>}>
                    <Routes>
                        {/*<Route path="*" element={<Navigate to={"/"}/>}/>*/}
                        {/*<Route path="/" element={<Navigate to={"profile/"}/>}/>*/}
                        <Route path="/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/login/*" element={<Login/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/friends/*" element={<Friends/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

export default compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);