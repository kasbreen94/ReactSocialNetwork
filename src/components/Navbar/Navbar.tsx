import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {NavLink, useMatch} from "react-router-dom";
import Icon from '@mui/material/Icon';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setOpenChat} from "../../../redux/chatSlice";
import {Tabs, Tab, Button} from "@mui/material";

type NavbarType = {
    id: number
    select: string
    address: string
    icon: string
}

export const Navbar = () => {

    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(state => state.chat.isOpen)

    const params = useMatch('*')?.params['*']
    const currentPage = params?.split('/')[0]

    const navbar: NavbarType[] = [
        {id: 1, select: 'Profile', address: '', icon: 'account_circle'},
        {id: 2, select: 'Users', address: 'users', icon: 'people_alt'},
        {id: 4, select: 'Dialogs', address: 'dialogs', icon: 'chat'},
    ];

    const [value, setValue] = React.useState(currentPage);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange} orientation="vertical">
                {navbar.map(select =>
                    <Tab
                        label={select.select}
                        value={select.address}
                        component={NavLink}
                        icon={<Icon sx={{fontSize: 20}}>{select.icon}</Icon>}
                        iconPosition="start"
                        to={`/${select.address}`}
                        sx={{alignSelf: 'start', minHeight: 50}}
                        key={select.id}/>
                )}
            </Tabs>
            <Button
                variant="outlined"
                onClick={() => dispatch(setOpenChat())}
                sx={{mt: 3}}
            >
                {!isOpen ? "Open chat" : "Close chat"}
            </Button>
            {/*<div className={styles.navTabs}>*/}
            {/*    {navbar.map(select =>*/}
            {/*        <NavLink*/}
            {/*            to={select.address}*/}
            {/*            className={({isActive}) => isActive ? styles.tabActive : styles.tabNotActive}*/}
            {/*        >*/}
            {/*            <div className={styles.navTab}>*/}
            {/*                <Icon>{select.icon}</Icon>*/}
            {/*                <div>*/}
            {/*                    {select.select}*/}
            {/*                </div>*/}
            {/*                <div className={styles.line}></div>*/}
            {/*            </div>*/}
            {/*        </NavLink>)}*/}
            {/*    <button className={styles.button} onClick={() => dispatch(setOpenChat())}>*/}
            {/*        {!isOpen ? "Open chat" : "Close chat"}*/}
            {/*    </button>*/}
            {/*</div>*/}
        </>
    )
}