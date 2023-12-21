import {profileAPI} from "../api/api";

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
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, like: 0}]
            };
        }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts].filter(p => p.id !== action.postId)
            };
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

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhoto = (photos) => ({type: SET_PHOTO, photos})

export const getUserProfile = (userId) => async (dispatch) => {

    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updPhoto = (file) => async (dispatch) => {

    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
}

export const updateInfo = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.updateInfo(profile);
    if (response.data.resultCode === 0) {

        dispatch(getUserProfile(userId));
    }
}

export default profileReducer;