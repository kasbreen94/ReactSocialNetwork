import React, {useCallback} from "react";
import {useSetFollowMutation, useSetUnfollowMutation} from "../../api/users_api";
import {Button, Grid} from "@mui/material";

type PropsType ={
    userId: number
    followed: boolean
}

export const FollowedUser = React.memo(({userId, followed}: PropsType) => {
    console.log('followed')
    // const {data} = useGetFollowedQuery(userId)
    const [setFollow] = useSetFollowMutation()
    const [setUnfollow] = useSetUnfollowMutation()

    const setFollowedUserHandler = useCallback( async (followedStatus: boolean, id: number) => {
        if (followedStatus) {
            await setUnfollow({id, body: false})
        } else {
            await setFollow({id, body: true})
        }
    }, [setUnfollow, setFollow]);

    return (
        <>
            <Button onClick={() => setFollowedUserHandler(followed, userId)}
                    color={followed ? "error" : "success"}
                    sx={{flexGrow: 1}}>
                {followed ? 'unfollow' : 'follow'}</Button>
        </>
    )
});