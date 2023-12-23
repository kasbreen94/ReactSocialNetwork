import React, {useEffect, useState} from "react";
import ProfileInfoStyle from './ProfileInfo.module.css'

const ProfileStatusHooks = (props) => {

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
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
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

export default ProfileStatusHooks;