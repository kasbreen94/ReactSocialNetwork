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
        onPostChange: (e) => {
            let text = e.target.value;
            let action = dispatch(updateNewPostTextActionCreator(text));
            dispatch(action);

            // props.onPostChange(text);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;