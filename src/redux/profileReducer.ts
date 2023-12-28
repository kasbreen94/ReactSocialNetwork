import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "./types/types";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTO = 'profile/SET_PHOTO';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'tincidunt nunc pulvinar sapien ettincidunt ' +
                'nunc pulvinar sapien ettincidunt nunc pulvinar ' +
                'sapien ettincidunt nunc pulvinar sapien ettincidunt ' +
                'nunc pulvinar sapien ettincidunt nunc pulvinar ' +
                'sapien ettincidunt nunc pulvinar sapien ettincidunt' +
                ' nunc pulvinar sapien et',
            like: 13
        }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, like: 0}]
            };
        }
        case DELETE_POST: {
            return  {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
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

type ActionType = AddPostActionType | DeletePostActionType | SetUserProfileActionType | SetStatusActionType | SetPhotoActionType

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

export const getUserProfile = (userId: number) => async (dispatch: any) => {

    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {

    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updPhoto = (file: any) => async (dispatch: any) => {

    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
}

export const updateInfo = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    let response = await profileAPI.updateInfo(profile);
    if (response.data.resultCode === 0) {

        dispatch(getUserProfile(userId));
    }
}

export default profileReducer;