import React, {ChangeEvent, FC, useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import avatar from "../../../assets/images/avatar.svg";
import ProfileStatus from "./ProfileStatus";
import {MainInfoEditForm} from "./MainInfoEditForm";
import {ProfileType} from "../../../redux/types/types";
import {useDispatch} from "react-redux";
import {updateInfo, updPhoto} from "../../../redux/profileReducer";
import {AppDispatch} from "../../../redux/redux_store";

type PropsTypes = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
}

const ProfileInfo: FC<PropsTypes> = (props) => {

    const dispatch: AppDispatch = useDispatch()

    const [info, setInfo] = useState({mainInfo: true, aboutMe: false, contacts: false})

    const setInfoDisplay = (mainInfo: boolean, aboutMe: boolean, contacts: boolean) => {
        setInfo({mainInfo, aboutMe, contacts})
    }

    const [editMode, setEditMode] = useState(false);

    const aEditMode = () => {
        props.isOwner && setEditMode(true);
    }

    const dEditMode = () => {
        setEditMode(false)
    }

    const onSubmit = (data: ProfileType) => {
        dispatch(updateInfo(data))
        setEditMode(false)
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            dispatch(updPhoto(e.target.files[0]))
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.info}>
            <div className={s.profileInfo}>
                <ProfileStatus isOwner={props.isOwner} status={props.status}/>
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
                            info={info}
                            onSubmit={onSubmit}
                            profile={props.profile}
                            dEditMode={dEditMode}
                        />
                        : <div>
                            {info.mainInfo && <div className={s.descriptionInfo}>
                                <div className={s.descriptionItem}>
                                    <span>Name:</span>
                                    {props.profile.fullName}
                                </div>
                                <div className={s.descriptionItem}>
                                    <span>Looking for a job:</span>
                                     <div className={`${s.lookingForAJob} ${props.profile.lookingForAJob === false && s.notLookingForAJob}`}></div>
                                </div>
                                <div className={s.descriptionItem}>
                                    <span>My professional skills:</span>
                                    {props.profile.lookingForAJobDescription}
                                </div>
                            </div>}

                            {info.contacts && <div className={s.contacts}>
                                {Object.entries(props.profile.contacts!)
                                    .filter(([c, v]) => c && v !== null && c && v !== "")
                                    .map(([key, value]) =>
                                        <div key={value} >
                                            {key} :
                                            <a href={value}>{value}</a>
                                        </div>)}
                            </div>}

                            {info.aboutMe &&  <div className={s.aboutMe}>
                                {props.profile.aboutMe}
                            </div>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;