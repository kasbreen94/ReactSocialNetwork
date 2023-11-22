const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ''
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

        default:
            return  state;
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;