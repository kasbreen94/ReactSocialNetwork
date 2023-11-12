import React from "react";
import ProfileInfoStyle from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={ProfileInfoStyle.info}>
            <div className={ProfileInfoStyle.img}>
                <img
                    src='https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/users/5abb9f1e9da86f6ccf102957/16643490e099111.jpg'
                    alt='123'/>
            </div>
            <div className={ProfileInfoStyle.description}>
                My Profile
            </div>
        </div>
    )
}

export default ProfileInfo;