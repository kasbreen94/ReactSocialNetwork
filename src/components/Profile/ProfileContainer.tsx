import React, {FC, useEffect, useRef} from "react";
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
import {PostType, ProfileType} from "../../redux/types/types";
import {AppStateType} from "../../redux/redux_store";
import {useParams} from "react-router-dom";

type MapStateToPropsType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
    authUserId: number | null
    isAuth: boolean

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

    const params = useParams()
    let userId: number | null  = Number(params.userId)

    const refreshProfile = () => {

        if (!userId) {
            userId = props.authUserId;
        }
        if (typeof userId === "number") {
            props.getUserProfile(userId)
            props.getStatus(userId)
        }
    }

    useEffect(() => {
        refreshProfile()
    }, [userId]);

    return (

        <Profile {...props}
                 isOwner={!userId}
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
    // withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addPost, deletePost, updPhoto, updateInfo})
)(ProfileContainer);