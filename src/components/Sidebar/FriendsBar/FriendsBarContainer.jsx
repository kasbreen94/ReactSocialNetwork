import React from "react";

import {connect} from "react-redux";
import FriendsBar from "./FriendsBar";
import friendsBarStyle from "./FriendsBar.module.css";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const FriendsBarContainer =
    connect(mapStateToProps, mapDispatchToProps)(FriendsBar);

export default FriendsBarContainer;