import React, {FC, useEffect, useRef, useState} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost, deletePost,
    getStatus,
    getUserProfile, updateInfo,
    updateStatus,
    updPhoto
} from "../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {PostType, ProfileType} from "../../redux/types/types";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    posts: PostType
    profile: ProfileType
    status: string
    authUserId: number
    isAuth: boolean
    match: any
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    addPost:(newPostText: string) => void
    deletePost: (postId: number) => void
    updPhoto: (file: any) => void
    updateInfo: (profile: ProfileType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const ProfileContainer: FC<PropsType> = (props) => {
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
    }, [userId]);

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

let mapStateToProps = (state: AppStateType) => ({
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