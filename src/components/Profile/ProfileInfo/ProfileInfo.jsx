import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import avatar from "../../../assets/images/avatar.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";
import DescriptionInfo from "./Info/Main info/DescriptionInfo";
import Contacts from "./Info/Contacts/Contacts";
import AboutMe from "./Info/AboutMe";
import {MainInfoEditForm} from "./Info/Main info/MainInfoEditForm";

const ProfileInfo = (props) => {

    const [info, setInfo] = useState({mainInfo: true, aboutMe: false, contacts: false})

    const setInfoDisplay = (mainInfo, aboutMe, contacts) => {
        setInfo({mainInfo, aboutMe, contacts})
    }

    const [editMode, setEditMode] = useState(false);

    const aEditMode = () => {
        props.isOwner && setEditMode(true);
    }

    const dEditMode = () => {
        setEditMode(false)
    }

    const onSubmit = (data) => {
        props.updateInfo(data)
        setEditMode(false)
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updPhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.info}>
            <div className={s.profileInfo}>
                <ProfileStatusHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.Photo}>
                    <div>
                        <img src={props.profile.photos.large || avatar} alt=''/>
                        {props.isOwner
                            && <div className={s.downPhoto}>
                                <input type={"file"} name="file" id="inputFile" className={s.inputDownPhoto}
                                       onChange={mainPhotoSelected}/>
                                <label htmlFor="inputFile">
                                    <span className={s.btnDownPhoto}>download photo</span>
                                </label>
                            </div>}
                    </div>
                </div>
                <div>
                    <nav className={s.selectInfo}>
                        <button onClick={() => {
                            setInfoDisplay(true, false, false)
                        }}
                                className={info.mainInfo ? s.active : undefined}>Main info
                        </button>
                        <button onClick={() => {
                            setInfoDisplay(false, true, false)
                        }}
                                className={info.aboutMe ? s.active : undefined}>About me
                        </button>
                        <button onClick={() => {
                            setInfoDisplay(false, false, true)
                        }}
                                className={info.contacts ? s.active : undefined}>Contacts
                        </button>
                        {props.isOwner && <div>
                            <button onClick={aEditMode}
                                    className={editMode ? s.active : undefined}
                            >{editMode ? 'Editing mode' : 'Edit a profile'}</button>
                        </div>}
                    </nav>
                    <div className={s.line}></div>

                    {editMode
                        ? <MainInfoEditForm
                            mainInfo={info.mainInfo}
                            contacts={info.contacts}
                            aboutMe={info.aboutMe}
                            onSubmit={onSubmit}
                            aEditMode={aEditMode}
                            profile={props.profile}
                            dEditMode={dEditMode}
                        />
                        : <div>
                            {info.mainInfo && <DescriptionInfo
                                fullName={props.profile.fullName}
                                lookingForAJob={props.profile.lookingForAJob}
                                lookingForAJobDescription={props.profile.lookingForAJobDescription}
                            />}
                            {info.contacts && <Contacts
                                contacts={props.profile.contacts}
                                isOwner={props.isOwner}
                            />}
                            {info.aboutMe && <AboutMe
                                aboutMe={props.profile.aboutMe}
                                isOwner={props.isOwner}/>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;