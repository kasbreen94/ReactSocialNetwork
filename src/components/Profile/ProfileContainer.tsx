import React, {FC, useEffect} from "react";
import {connect} from "react-redux";
import {actions, getStatus, getUserProfile, updateInfo, updateStatus, updPhoto} from "../../redux/profileReducer";
import {compose} from "redux";
import {ContactsType, PostType, ProfileType} from "../../redux/types/types";
import {AppStateType} from "../../redux/redux_store";
import {useParams} from "react-router-dom";
import ProfileStyle from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

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
    updPhoto: (file: File) => void
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
        <div className={ProfileStyle.profileWrapper}>
            <ProfileInfo
                isOwner={!userId}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                updPhoto={props.updPhoto}
                updateInfo={props.updateInfo}
            />
            <MyPosts  posts={props.posts} addPost={props.addPost} deletePost={props.deletePost}
            />
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

const addPost = actions.addPost
const deletePost = actions.deletePost

export default compose(
    connect(mapStateToProps, { addPost, deletePost, getUserProfile, getStatus, updateStatus, updPhoto, updateInfo})
)(ProfileContainer);