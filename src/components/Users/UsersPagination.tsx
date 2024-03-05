import React, {ChangeEvent, memo, useCallback, useState} from "react";
import {Stack} from "@mui/system";
import {AppBar, Grid, Pagination, Paper, TextField} from "@mui/material";
import {useSearchParams} from "react-router-dom";

type PropsType = {
    totalPage: number
    page: number
    isFetching: boolean
}

export const UsersPagination = memo(({totalPage, page, isFetching}: PropsType) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setInputPageHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value) {
            searchParams.set('page', e.currentTarget.value)
            setSearchParams(searchParams, {replace: true})
        }
    }, [searchParams, setSearchParams]);

    const setCurrentPage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        if (value === 1) {
            searchParams.delete('page')
        } else searchParams.set('page', String(value))

        setSearchParams(searchParams, {replace: true})
    }, [searchParams, setSearchParams])

    return (
        <Paper sx={{backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '100%'}} elevation={5}>
            <Grid container direction='row' sx={{p: '0 20px'}} justifyContent="center">
                <Grid item xs={10.5} container>
                    <Stack spacing={2} sx={{marginY: 2, marginX: 'auto'}}>
                        <Pagination count={Number(totalPage)} siblingCount={2}
                                    page={page}
                                    disabled={isFetching}
                                    onChange={setCurrentPage}
                                    variant="outlined"
                                    color="primary"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={1.5} container justifyContent="center" direction="column">
                    <TextField
                        type='number'
                        autoComplete='n'
                        size='small'
                        label='Set page'
                        sx={{}}
                        onChange={setInputPageHandler}/>
                </Grid>
            </Grid>
        </Paper>
    )
});