import React from "react";
import ProfileInfoStyle from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import avatar from "../../../assets/images/avatar.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={ProfileInfoStyle.info}>
            {/*<div className={ProfileInfoStyle.profileLogo}>*/}
            {/*    <img*/}
            {/*        src='https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/users/5abb9f1e9da86f6ccf102957/16643490e099111.jpg'*/}
            {/*        alt='123'/>*/}
            {/*</div>*/}

            <div className={ProfileInfoStyle.profileInfo}>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={ProfileInfoStyle.Photo}>
                    <span>My Profile</span>
                    <div>
                        <img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt=''/>
                    </div>
                </div>
                <div className={ProfileInfoStyle.descriptionInfo}>
                    <div className={ProfileInfoStyle.descriptionItem}>
                        <span>MyName</span>
                        {props.profile.fullName}
                    </div>
                    <div className={ProfileInfoStyle.descriptionItem}>
                        <span>lookingForAJob:</span>
                        {props.profile.lookingForAJob === true ? 'Ищу работу' : 'Не ищу работу'}
                    </div>
                    <div className={ProfileInfoStyle.descriptionItem}>
                        <span>lookingForAJobDescription:</span>
                        {props.profile.lookingForAJobDescription}
                    </div>
                </div>

                <div className={ProfileInfoStyle.contactsInfo}>
                    Contacts:
                    {Object.values(props.profile.contacts).filter(c => c !== null).map(c =>
                        <div className={ProfileInfoStyle.contacts} key={c.id}>
                            <a href={c}>{c}</a>
                    </div>)}
                </div>
                <div className={ProfileInfoStyle.aboutMe}>
                    <span>aboutMe:</span>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;