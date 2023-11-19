import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {

    let postsElement =
        props.posts.map(posts => <Post message={posts.message} like={posts.like}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <div className={MyPostsStyle.posts}>
        <div>
            <h3>My post</h3>
            <div className={MyPostsStyle.addPost}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
        <div>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;