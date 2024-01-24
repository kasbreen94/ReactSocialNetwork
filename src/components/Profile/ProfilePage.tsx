import React, {useEffect} from "react";
import {clearUserProfile, requestStatus, requestUserProfile} from "../../redux/profileSlice";
import {useParams} from "react-router-dom";
import ProfileStyle from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {useAppDispatch, useAppSelector} from "../../redux/store";

export const ProfileContainer = () => {

    const {posts, profile, status} = useAppSelector(state => state.profilePage)
    const authUserId = useAppSelector(state => state.auth.auth.id)

    const dispatch = useAppDispatch()

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
        return () => {
            dispatch(clearUserProfile())
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
