import {connect} from "react-redux";
import React, {FC} from "react";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux_store";
import {FriendsType, NavbarType} from "../../redux/sidebarReducer";
import Navbar from "./Navbar/Navbar";
import FriendsBar from "./FriendsBar/FriendsBar";
import sidebarStyle from "./Sidebar.module.css";
import {Navigate} from "react-router-dom";

type PropsTypes = {
    navbar: NavbarType[]
    friends: FriendsType[]
    isAuth: boolean
}

const SidebarContainer: FC<PropsTypes> = (props) => {

    if(!props.isAuth)
        return <Navigate to='/login' />

    return <div className={sidebarStyle.sidebar}>
        <Navbar navbar={props.navbar}/>
        <FriendsBar friends={props.friends}/>
    </div>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        navbar: state.sidebar.navbar,
        friends: state.sidebar.friends,
        isAuth: state.auth.isAuth
    }
}

export default compose (
    connect(mapStateToProps),
) (SidebarContainer);

