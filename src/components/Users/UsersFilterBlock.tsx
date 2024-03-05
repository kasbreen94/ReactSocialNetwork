import React, {memo, useCallback} from "react";
import {FormControl, Grid, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {useSearchParams} from "react-router-dom";

type PropsType = {
    count: number
    term: string
    friend: null | boolean
}

export const UsersFilterBlock = memo(({count, term, friend}: PropsType) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const friendFilterChangeHandler = useCallback((e: SelectChangeEvent) => {
        let value = e.target.value
        // setFriend(value === 'null' ? null : value === 'true' ? true : false)
        searchParams.set('friend', value === 'null' ? '' : value)
        setSearchParams(searchParams, {replace: true})



        // if(friend === 'null') {
        //     searchParams.delete('friend')
        //     setSearchParams(searchParams, {replace: true})
        // } else {
        //     searchParams.set('friend', friend)
        //     setSearchParams(searchParams, {replace: true})
        // }
    }, [searchParams, setSearchParams]);

    console.log(searchParams.get('page'))



    const setCountHandler = useCallback((event: SelectChangeEvent) => {
        let count = event.target.value
        if(count === '5') {
            searchParams.delete('count')
            setSearchParams(searchParams)
        } else {
            searchParams.set('count', count)
            setSearchParams(searchParams)
        }
    }, [searchParams, setSearchParams]);

    const setValueTermHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let term = e.target.value
        if (!term) {
            searchParams.delete('term')
        } else searchParams.set('term', term)

        setSearchParams(searchParams, {replace: true});

        // if(term.length === 0) {
        //     searchParams.delete('term')
        //     setSearchParams(searchParams, {replace: true})
        // } else {
        //     searchParams.set('term', term)
        //     setSearchParams(searchParams, {replace: true})
        // setTerm(term)
        // }
    }, [searchParams, setSearchParams])

    return (
        <>
            <Grid item xs={1.5} >
                <FormControl fullWidth variant="outlined" size="small" sx={{maxWidth: 80}}>
                    <Select value={String(count)} onChange={setCountHandler} >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={8}  >
                <TextField fullWidth size="small"
                           value={term}
                           onChange={setValueTermHandler}/>
            </Grid>
            <Grid item xs={2.5} >
                <FormControl fullWidth variant="outlined" sx={{maxWidth: 120}} size="small">
                    <Select value={String(friend)} onChange={friendFilterChangeHandler} >
                        <MenuItem value='null'>all</MenuItem>
                        <MenuItem value='true'>follow</MenuItem>
                        <MenuItem value='false'>unfollow</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
})