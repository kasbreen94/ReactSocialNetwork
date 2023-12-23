import React, {useEffect, useRef, useState} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    deletePost,
    getStatus,
    getUserProfile, updateInfo, updateName,
    updatePhoto,
    updateStatus,
    updPhoto
} from "../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;



    const refreshProfile = () => {
        if (!userId) {
            userId = props.authUserId;
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }

    useEffect(() => {
        refreshProfile();
    }, [props.match.params.userId]);

    return (

        <Profile {...props}
                 isOwner={!props.match.params.userId}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 addPost={props.addPost}
                 deletePost={props.deletePost}
                 posts={props.posts}
                 updPhoto={props.updPhoto}
                 updateInfo={props.updateInfo}
        />
    )
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addPost, deletePost, updPhoto, updateInfo})
)(ProfileContainer);