import {PhotosType, PostType, ProfileType} from "./types/types";
import {profileAPI} from "../api/profileAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        posts: [] as Array<PostType>,
        profile: null as ProfileType | null,
        status: ''
    },
    reducers:{
        setUserProfile(state, action: PayloadAction<ProfileType>) {
            state.profile = action.payload
        },
        setStatus(state, action: PayloadAction<string>) {
            state.status = action.payload
        },
        setPhoto(state, action: PayloadAction<PhotosType>) {
            // @ts-ignore
            state.profile.photos = action.payload
        },
        addPost(state, action: PayloadAction<string>) {
            state.posts.push({id: state.posts.length + 1, message: action.payload, like: 0})
        },
        deletePost(state, action: PayloadAction<number>) {
           state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    }
})

export const {setUserProfile, setStatus, setPhoto, addPost, deletePost} = usersSlice.actions
export default usersSlice.reducer

export const requestUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const requestStatus = (userId: number) => async (dispatch: any) => {

    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {

    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updPhoto = (file: File) => async (dispatch: any) => {

    let data = await profileAPI.updatePhoto(file)
    if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos))
    }
}

export const updateInfo = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.auth.id;
    let data = await profileAPI.updateInfo(profile);
    if (data.resultCode === 0) {
        if(userId !== null) {
            await dispatch(requestUserProfile(userId));
        } else {
            throw new Error('userId can`t be null')
        }
    }
}
