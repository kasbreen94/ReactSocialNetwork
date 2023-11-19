import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Friends from "./components/Friends/Friends";
import {updateNewMessageText, updateNewPostText} from "./redux/store";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                            />}/>
                        <Route path="/dialogs/*" element={<Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/friends/*" element={<Friends />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
