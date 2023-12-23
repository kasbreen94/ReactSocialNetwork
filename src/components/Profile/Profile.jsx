import React from "react";
import ProfileStyle from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {MainInfoEditForm} from "./ProfileInfo/Info/Main info/MainInfoEditForm";

const Profile = (props) => {

    return <div className={ProfileStyle.profileWrapper}>
        <ProfileInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            updPhoto={props.updPhoto}
            updateInfo={props.updateInfo}
        />
        <MyPosts  posts={props.posts} addPost={props.addPost} deletePost={props.deletePost}
        />
    </div>
}

export default Profile;