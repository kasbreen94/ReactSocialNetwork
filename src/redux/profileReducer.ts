import {PhotosType, PostType, ProfileType} from "./types/types";
import {BaseThunkType, InferActionsTypes} from "./redux_store";
import {profileAPI} from "../api/profileAPI";

export type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes>

let initialState = {
    posts: [] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: action.newPostText, like: 0}]
            };
        }
        case 'SN/PROFILE/DELETE_POST': {
            return  {
                ...state, posts: state.posts.filter(post => {
                    return post.id !== action.postId
                })
            }
        }
        case 'SN/PROFILE/SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'SN/PROFILE/SET_PHOTO':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        case 'SN/PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    }
}

export const actions = {
    addPost: (newPostText: string) => ({type: 'SN/PROFILE/ADD_POST', newPostText} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType)=> ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    setPhoto: (photos: PhotosType) => ({type: 'SN/PROFILE/SET_PHOTO', photos} as const)
}

export const requestUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
}

export const requestStatus = (userId: number): ThunkType => async (dispatch) => {

    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {

    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const updPhoto = (file: File): ThunkType => async (dispatch) => {

    let data = await profileAPI.updatePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.setPhoto(data.data.photos))
    }
}

export const updateInfo = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await profileAPI.updateInfo(profile);
    if (data.resultCode === 0) {
        if(userId !== null) {
            await dispatch(requestUserProfile(userId));
        } else {
            throw new Error('userId can`t be null')
        }
    }
}

export default profileReducer;