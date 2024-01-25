import React, {ChangeEvent, FC, useEffect, useState} from "react";
import ProfileInfoStyle from './ProfileInfo.module.css'
import {updateStatus} from "../../../redux/profileSlice";
import {useAppDispatch} from "../../../redux/store";

type PropsType = {
    status: string
    isOwner: boolean
}

const ProfileStatus: FC<PropsType> = (props) => {

    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const aEditMode = () => {
        props.isOwner && setEditMode(true);
    }

    const dEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(status))
    }

    const onStatusChange = (e:  ChangeEvent<HTMLInputElement>): void => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={ProfileInfoStyle.status}>
            <span>Status :</span>
            <span>
                    {!editMode &&
                        <span className={ProfileInfoStyle.statusEdit}
                              onClick={aEditMode}
                        >{props.status || "No status"}
                        </span>}
                {editMode &&
                    <input className={ProfileInfoStyle.statusInput}
                           onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={dEditMode}
                           value={status}
                    />}
                </span>
        </div>
    )
}

export default ProfileStatus;