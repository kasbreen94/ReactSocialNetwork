import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            let action = dispatch(updateNewPostTextActionCreator(text));
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;