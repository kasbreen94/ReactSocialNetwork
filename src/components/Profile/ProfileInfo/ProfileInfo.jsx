import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import avatar from "../../../assets/images/avatar.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";
import DescriptionInfo from "./Info/Main info/DescriptionInfo";
import Contacts from "./Info/Contacts/Contacts";
import AboutMe from "./Info/AboutMe";

const ProfileInfo = (props) => {

    const [mainInfo, setMainInfo] = useState(true);
    const [aboutMe, setAboutMe] = useState(false);
    const [contacts, setContacts] = useState(false);

    const setInfoDisplay = (mainInfo, AboutMe, Contacts) => {
        setMainInfo(mainInfo);
        setAboutMe(AboutMe);
        setContacts(Contacts)
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
            <span className={s.blockName}>Profile</span>
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
                        }}>Main info
                        </button>
                        <button onClick={() => {
                            setInfoDisplay(false, true, false)
                        }}>About me
                        </button>
                        <button onClick={() => {
                            setInfoDisplay(false, false, true)
                        }}>Contacts
                        </button>
                        {props.isOwner && <div>
                            <button onClick={props.aEditMode}>Edit profile</button>
                        </div>}


                    </nav>

                    <div className={s.line}></div>

                    {mainInfo && <DescriptionInfo
                        fullName={props.profile.fullName}
                        lookingForAJob={props.profile.lookingForAJob}
                        lookingForAJobDescription={props.profile.lookingForAJobDescription}
                        isOwner={props.isOwner}
                        profile={props.profile}
                        updateInfo={props.updateInfo}
                        editMode={props.editMode}
                    />}
                    {contacts && <Contacts
                        contacts={props.profile.contacts}
                        isOwner={props.isOwner}
                        updateInfo={props.updateInfo}/>}
                    {aboutMe && <AboutMe
                        aboutMe={props.profile.aboutMe}
                        isOwner={props.isOwner}/>}

                </div>
            </div>

            <div className={s.lineWrapper}></div>
        </div>
    )
}

export default ProfileInfo;