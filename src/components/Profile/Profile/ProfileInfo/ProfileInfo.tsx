import React, {FC, useState} from "react";
import {ProfileType} from "../../../redux/types/types";
import {Box, Divider, LinearProgress, Link, Paper, Skeleton, Typography} from "@mui/material";
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {Stack} from "@mui/system";
import {useAppDispatch, useAppSelector} from "../../../redux/store";

type PropsTypes = {
    isOwner: boolean
    status: string
}

export const ProfileInfo: FC<PropsTypes> = () => {

    const profile = useAppSelector(state => state.profilePage.profile)

    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{backgroundColor: 'rgba(0, 0, 0, 0.1)', height: '100%'}} elevation={5}>
            <Box sx={{width: '100%'}}>
                <TabContext value={value}>
                    <Box>
                        <TabList onChange={handleChange} aria-label="basic tabs example" centered variant='fullWidth'>
                            <Tab label="Main info" value='1'/>
                            <Tab label="About Me" value='2'/>
                            <Tab label="Contacts" value='3'/>
                        </TabList>
                    </Box>
                    <Divider/>
                    <TabPanel value='1'>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="subtitle1" component='span'>
                                My name: {!profile ? <Skeleton></Skeleton> : profile.fullName}
                            </Typography>
                            <Divider></Divider>
                            <Typography variant="subtitle1" component='span'>
                                {!profile ? <Skeleton></Skeleton>
                                    : (profile.lookingForAJob === true ? 'Looking for a job' : '')}
                            </Typography>
                        </Stack>
                        <Divider textAlign="center" sx={{mb: 1}}>
                            <Typography variant="body1">
                                My professional skills
                            </Typography>
                        </Divider>
                        <Typography variant="body2" sx={{wordWrap: 'break-word'}}>
                            {!profile ? <Skeleton></Skeleton> : profile.lookingForAJobDescription}
                        </Typography>
                    </TabPanel>
                    <TabPanel value='2'>
                        {!profile ? <Skeleton></Skeleton> : profile.aboutMe}
                    </TabPanel>
                    <TabPanel value='3'>
                        {!profile ? <Skeleton></Skeleton>
                            : Object.entries(profile?.contacts!)
                                    .filter(([c, v]) => c && v !== null && c && v !== "")
                                    .map(([key, value]) =>
                                        <Typography key={value}>
                                            {key}:
                                            <Link href={value}>{value}</Link>
                                        </Typography>)}
                    </TabPanel>
                </TabContext>
            </Box>
        </Paper>
    )
}