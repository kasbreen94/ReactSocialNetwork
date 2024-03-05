import React, {useEffect, useState} from "react";
import {useRequestUsersQuery} from "../../api/users_api";
import {UsersType} from "../../redux/types/types";
import {FollowedUser} from "./FollowedUser";
import {AppBar, Avatar, Button, ButtonBase, Divider, Grid, Paper, Typography} from "@mui/material";
import avatar from "./../../assets/images/avatar.svg";
import {NavLink, useSearchParams} from "react-router-dom";
import {UsersPagination} from "./UsersPagination";
import {UsersFilterBlock} from "./UsersFilterBlock";
import {Abc} from "@mui/icons-material";

export const TestPage = React.memo(() => {
    const [searchParams] = useSearchParams();

    const [page, setPage] = useState(1)
    const [term, setTerm] = useState('')
    const [friend, setFriend] = useState<null | boolean>(null)

    console.log(`Current page: ${page}`)
    console.log(`Search term: ${term}`)
    console.log(`Friend: ${friend}`)

    let count = Number(searchParams.get('count')) || 5;

    const {
        data: users, error, isLoading, isSuccess, isFetching
    } = useRequestUsersQuery({page, count, term, friend});

    const totalPage: number = isSuccess ? Math.ceil(users.totalCount / count) : 0;

    useEffect(() => {
        let searchPage = Number(searchParams.get('page'));

        if (searchPage) setPage(Number(searchPage));
        // if(totalPage < searchPage) setPage(totalPage)
        if (!searchPage || page === 0) setPage(1)

        let searchTerm = searchParams.get('term') as string;

        if (searchTerm) setTerm(searchTerm);
        if (!searchTerm) setTerm('')

        let searchFriend = searchParams.get('friend');

        if (!searchFriend) setFriend(null)
        if (searchFriend === 'true') setFriend(true)
        if (searchFriend === 'false') setFriend(false)

    }, [searchParams, page, totalPage]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Не удалось загрузить пользователей</p>
    }

    return (
        <Grid item sx={{width: '90%'}} container spacing={2} direction="column">
            <Grid item xs sx={{top: 50, position: 'sticky'}}>
                <UsersPagination totalPage={totalPage} page={page} isFetching={isFetching}/>
            </Grid>
            <Grid item xs>
                <Paper sx={{backgroundColor: 'rgba(0, 0, 0, 0.1)', p: 2}} elevation={5}>
                    <Grid container item spacing={2} xs={12}>
                        <UsersFilterBlock count={count} term={term} friend={friend}/>
                    </Grid>
                </Paper>
            </Grid>
            <Grid container item xs>
                <Paper sx={{backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '100%'}} elevation={5}>
                    {isSuccess && users.items.map((user: UsersType) =>
                        <Grid item xs={12} key={user.id} sx={{p: 1}} container spacing={2}>
                            <Grid container item>
                                <Grid item xs>
                                    <ButtonBase sx={{width: 90, height: 90}}>
                                        <NavLink to={`/${user.id}`}>
                                            <Avatar
                                            alt="photo"
                                            src={user.photos.small ?? avatar}
                                            style={{width: '80px', height: '80px'}}
                                            variant="rounded"/>
                                        </NavLink>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={10} container direction="column" spacing={2} sx={{width: '100%'}}>
                                    <Grid item sx={{wordWrap: 'break-word', width: '100%',}}>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {user.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom sx={{minHeight: 0}}>
                                            {user.status}
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent="space-between">
                                        <Grid>
                                            <FollowedUser userId={user.id} followed={user.followed}/>
                                        </Grid>
                                        <Grid>
                                            <Button variant="contained" size='small'>send message</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Divider></Divider>
                            </Grid>
                        </Grid>)}
                </Paper>
            </Grid>
        </Grid>
    )
});