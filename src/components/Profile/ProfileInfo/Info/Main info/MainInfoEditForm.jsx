import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import s from "./../../../Profile.module.css"


export const MainInfoEditForm = (props) => {

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
                <button type="submit" disabled={!isValid} className={s.save}>Save</button>
                <div onClick={props.dEditMode} className={s.close}>Close</div>
                <div className={s.line}></div>
                {props.mainInfo && <div>
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
                        <textarea placeholder="enter your email" maxLength={300}
                                  {...register("lookingForAJobDescription", {})}/>
                    </div>

                </div>}
                {props.aboutMe && <div >
                    About Me ->
                    <textarea placeholder="enter your email" maxLength={300}
                           {...register("aboutMe", {
                               }
                           )}/>
                </div>}

                {props.contacts && <div>
                    {Object.keys(props.profile.contacts).map(c =>
                        <div key={c.key}>
                            {c} ->
                            <input placeholder="enter your text" className={s.contacts}
                                   {...register(`contacts.${c}`, {

                                   })}/>
                        </div>)}
                </div>}
            </form>
            {/*{response && (<p>Данные успешно отправлены</p>)}*/}
        </div>
    )
}