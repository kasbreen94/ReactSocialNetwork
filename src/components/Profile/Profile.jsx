import React from "react";
import ProfileStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div className={ProfileStyle.profileWrapper}>
        <ProfileInfo />
        <MyPosts posts={props.profile.posts}/>
    </div>
}

export default Profile;