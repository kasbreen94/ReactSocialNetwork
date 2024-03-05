import React, {FC, useState} from "react";
import {ProfileInfoEditForm} from "./ProfileInfoEditForm/ProfileInfoEditForm";
import {ProfileType} from "../../../redux/types/types";
import {Grid, LinearProgress, Paper} from "@mui/material";
import {ProfilePhoto} from "./ProfilePhoto";
import {ProfileInfo} from "./ProfileInfo";

type PropsTypes = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
}

export const Profile: FC<PropsTypes> = (props) => {

    const [openEditInfo, setOpenEditInfo] = useState(false);



    return (
        <Grid item container spacing={2}>
            <Grid item xs={3}>
                <Paper sx={{backgroundColor: 'rgba(0, 0, 0, 0.1)', p: 2}} elevation={5}>
                    <ProfilePhoto isOwner={props.isOwner} openEditProfile={() => setOpenEditInfo(true)}/>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProfileInfo isOwner={props.isOwner} status={props.status}/>
            </Grid>
            <ProfileInfoEditForm
                isOpen={openEditInfo}
                closeEditProfile={() => setOpenEditInfo(false)}
            />
        </Grid>
    )
}