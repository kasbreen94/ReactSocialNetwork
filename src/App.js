import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <SidebarContainer
                />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer />}></Route>
                        <Route path="/profile/" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/login/*" element={<Login/>}/>

                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/users/*" element={<UsersContainer />}/>
                        <Route path="/friends/*" element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
