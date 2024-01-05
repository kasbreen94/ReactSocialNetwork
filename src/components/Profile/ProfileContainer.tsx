import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestStatus, requestUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import ProfileStyle from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {getPosts, getProfile, getStatus} from "../../redux/selectors/profile_selectors";
import {getAuthUserId} from "../../redux/selectors/auth_selectors";
import {AppDispatch} from "../../redux/redux_store";

export const ProfileContainer = () => {

    const posts = useSelector(getPosts)
    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)
    const authUserId = useSelector(getAuthUserId)

    const dispatch: AppDispatch = useDispatch()

    const params = useParams()
    let userId: number | null  = Number(params.userId)

    useEffect(() => {
        if (!userId) {
            userId = authUserId;
        }
        if (typeof userId === "number") {
            dispatch(requestUserProfile(userId))
            dispatch(requestStatus(userId))
        }
    }, [userId]);

    return (
        <div className={ProfileStyle.profileWrapper}>
            <ProfileInfo
                isOwner={!userId}
                profile={profile}
                status={status}
            />
            <MyPosts posts={posts} />
        </div>
    )
}
