import React from "react";
import ProfileStyle from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {


    return <div className={ProfileStyle.profileWrapper}>
        <ProfileInfo profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPosts posts={props.posts} addPost={props.addPost}
        />
    </div>
}

export default Profile;