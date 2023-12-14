import React, {Suspense} from "react";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/app_Reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import Preloader from "./components/common/preloader/preloader";

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <SidebarContainer
                />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/*" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}></Route>
                            <Route path="/profile/" element={<ProfileContainer/>}/>
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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);