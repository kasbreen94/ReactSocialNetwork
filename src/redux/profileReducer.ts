import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux_store";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTO = 'profile/SET_PHOTO';

let initialState = {
    posts: [] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: action.newPostText, like: 0}]
            };
        }
        case DELETE_POST: {
            return  {
                ...state, posts: state.posts.filter(post => {
                    return post.id !== action.postId
                })
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    }
}

type ActionsTypes = AddPostActionType | DeletePostActionType | SetUserProfileActionType | SetStatusActionType | SetPhotoActionType

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
type SetPhotoActionType = {
    type: typeof SET_PHOTO
    photos: PhotosType
}

export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType=> ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const setPhoto = (photos: PhotosType): SetPhotoActionType => ({type: SET_PHOTO, photos})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {

    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {

    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updPhoto = (file: any): ThunkType => async (dispatch) => {

    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
}

export const updateInfo = (profile: ProfileType): ThunkType => async (dispatch, getState: any) => {
    const userId = getState().auth.id;
    let response = await profileAPI.updateInfo(profile);
    if (response.data.resultCode === 0) {

        dispatch(getUserProfile(userId));
    }
}

export default profileReducer;