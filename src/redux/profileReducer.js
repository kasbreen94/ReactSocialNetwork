import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
        },
        {
            id: 2,
            message: 'tellus molestie nunc non blandittellus ' +
                'molestie nunc non blandittellus molestie nunc ' +
                'non blandittellus molestie nunc non ' +
                'blanditblandittellus molestie nunc non ' +
                'blanditblandittellus molestie nunc non ' +
                'blanditblandittellus molestie nunc non blandit',
            like: 3
        }
    ],
    newPostText: '',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return  {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            };
        case SET_STATUS:
            return  {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            };

        default:
            return  state;
    }


}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (e) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: e.target.value})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;