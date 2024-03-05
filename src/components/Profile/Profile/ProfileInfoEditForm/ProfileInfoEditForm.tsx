import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {ProfileType} from "../../../../redux/types/types";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    Grid,
    Skeleton,
    TextField
} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Tab from "@mui/material/Tab";
import {updateInfo} from "../../../../redux/profileSlice";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";

type PropsType = {
    isOpen: boolean
    closeEditProfile: () => void
}

export const ProfileInfoEditForm = ({ isOpen, closeEditProfile}: PropsType) => {

    const dispatch = useAppDispatch()

    const profile = useAppSelector(state => state.profilePage.profile)

    const {
        register,
        formState: {isValid},
        handleSubmit,
    } = useForm<ProfileType>({
        mode: "onBlur",
        values: profile!
    });

    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const onSubmit = (data: ProfileType) => {
        dispatch(updateInfo(data))
        closeEditProfile()
    }

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={closeEditProfile}
            >
                {!profile ? <Skeleton></Skeleton>
                    : <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogContent sx={{width: 500}}>
                            <TabContext value={value}>
                                <Box>
                                    <TabList onChange={handleChange} aria-label="basic tabs example" centered
                                             variant='fullWidth'>
                                        <Tab label="Main info" value='1'/>
                                        <Tab label="About Me" value='2'/>
                                        <Tab label="Contacts" value='3'/>
                                    </TabList>
                                </Box>
                                <Divider/>
                                <TabPanel value='1'>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField label="Name" fullWidth
                                                       {...register("fullName", {})}/>
                                        </Grid>
                                        <Grid item>
                                            Looking for a job:
                                            <Checkbox
                                                {...register("lookingForAJob", {})}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField multiline label='My professional skills' fullWidth
                                                       maxRows={4}
                                                       inputProps={{
                                                           maxLength: 300
                                                       }}
                                                       {...register("lookingForAJobDescription", {})}/>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value='2'>
                                    <TextField
                                        multiline label='About Me'
                                        maxRows={4}
                                        inputProps={{
                                            maxLength: 300
                                        }}
                                        fullWidth
                                        {...register("aboutMe", {})}/>
                                </TabPanel>
                                <TabPanel value='3'>
                                    <Grid container direction="column" spacing={1}>
                                        {Object.keys(profile?.contacts!).map(c =>
                                            <Grid item key={c}>
                                                <TextField size="small" fullWidth label={c}
                                                    // @ts-ignore
                                                           {...register('contacts.' + c, {})}/>
                                            </Grid>)}
                                    </Grid>
                                </TabPanel>
                            </TabContext>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeEditProfile}>Cancel</Button>
                            <Button type="submit">Save</Button>
                        </DialogActions>
                    </form>}

            </Dialog>
        </React.Fragment>
    )
}