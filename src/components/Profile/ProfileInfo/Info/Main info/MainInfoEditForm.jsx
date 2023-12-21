import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import s from "./../../../Profile.module.css"
import {profileAPI} from "../../../../../api/api";
import {getUserProfile} from "../../../../../redux/profileReducer";
import {useParams} from "react-router-dom";


export const MainInfoEditForm = (props) => {

    const [mainInfo, setMainInfo] = useState(true);
    const [aboutMe, setAboutMe] = useState(false);
    const [contacts, setContacts] = useState(false);

    const setInfoDisplay = (mainInfo, AboutMe, Contacts) => {
        setMainInfo(mainInfo);
        setAboutMe(AboutMe);
        setContacts(Contacts)
    }

    const {
        register,
        formState: {isValid},
        handleSubmit,
    } = useForm({
        mode: "onBlur",
        values: props.profile
    });

    return (
        <div className={s.profileEditFormWrapper}>
            <form onSubmit={handleSubmit(props.onSubmit)} className={s.profileEditForm}>
                <nav className={s.selectInfo}>
                    <div onClick={() => {
                        setInfoDisplay(true, false, false)
                    }}>Main info
                    </div>
                    <div onClick={() => {
                        setInfoDisplay(false, true, false)
                    }}> About me
                    </div>
                    <div onClick={() => {
                        setInfoDisplay(false, false, true)

                    }}>Contacts
                    </div>
                </nav>
                {mainInfo && <div>
                    <div>
                        Name ->
                        <input placeholder="enter your name"
                               {...register("fullName", {})}/>
                    </div>
                    <div className={s.checkbox}>
                        Looking for a job ->
                        <input type={"checkbox"} placeholder="enter your password"
                               {...register("lookingForAJob", {})}/>
                    </div>
                    <div>
                        My professional skills ->
                        <input placeholder="enter your email"
                               {...register("lookingForAJobDescription", {})}/>
                    </div>

                </div>}
                {aboutMe && <div>
                    About Me ->
                    <input placeholder="enter your email"
                           {...register("aboutMe", {}
                           )}/>
                </div>}

                {contacts && <div>

                    {Object.keys(props.profile.contacts).map(c =>
                        <div>
                            {c} ->
                            <input placeholder="enter your text"
                                   {...register(`contacts.${c}`, {

                                   })}/>
                        </div>)}

                </div>}
                <button type="submit" disabled={!isValid}>Save</button>
                <button onClick={() => props.dEditMode}>Close</button>
            </form>
            {/*{response && (<p>Данные успешно отправлены</p>)}*/}
        </div>
    )
}