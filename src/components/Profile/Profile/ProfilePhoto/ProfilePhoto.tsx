import React, {ChangeEvent} from "react";
import avatar from "../../../assets/images/avatar.svg";
import {updPhoto} from "../../../redux/profileSlice";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {Button, ImageListItem, Input, Skeleton, Tooltip, Zoom} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

type PropsTypes = {
    isOwner: boolean
    openEditProfile: () => void
}

export const ProfilePhoto = ({isOwner, openEditProfile}: PropsTypes) => {

    const dispatch = useAppDispatch()

    const photos = useAppSelector(state => state.profilePage.profile?.photos)

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            dispatch(updPhoto(e.target.files[0]))
        }
    }

    return (
        <Tooltip
            TransitionComponent={Zoom}
            placement="top"
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -60],
                            },
                        },
                    ],
                },
            }}
            title={isOwner
                && <Button
                    size='small'
                    color='inherit'
                    component="label"
                    role={undefined}
                    variant="text"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon/>}
                >
                    Upload photo
                    <Input type="file" sx={{display: 'none'}} onChange={mainPhotoSelected}/>
                </Button>
            }>
            <ImageListItem sx={{width: '100%'}}>
                {!photos ? <Skeleton></Skeleton>
                    : <img src={photos?.large || avatar} alt='' style={{borderRadius: 5}}/>}
                {isOwner
                    && <Button
                        variant="outlined"
                        fullWidth
                        sx={{mt: 1}}
                        onClick={openEditProfile}>
                    Edit a profile
                </Button>}
            </ImageListItem>
        </Tooltip>
    )
}