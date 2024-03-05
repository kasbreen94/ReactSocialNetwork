import React, {ChangeEvent, FC, useEffect, useState} from "react";
import style from '../../ProfileInfo/ProfileStatus/ProfileStatus.module.css'
import {updateStatus} from "../../../../redux/profileSlice";
import {useAppDispatch} from "../../../../redux/store";
import {Grid, TextField, Typography} from "@mui/material";

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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setStatus(e.currentTarget.value)
    }

    return (
        <Grid>
            {!editMode &&
                <Typography
                    variant='body2'
                    onClick={aEditMode}
                    sx={{wordWrap: 'break-word'}}>
                    {props.status || "No status"}
                </Typography>}
            {editMode &&
                <TextField
                    fullWidth
                    multiline
                    maxRows={5}
                    label='Input your status'
                    inputProps={{
                        maxLength: 300
                    }}
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={dEditMode}
                    value={status}
                />}
        </Grid>
    )
}

export default ProfileStatus;