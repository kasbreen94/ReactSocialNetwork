import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostForm} from "./AddPostFormHook";

const MyPosts = React.memo(props => {

    console.log("RENDER")

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={MyPostsStyle.posts}>
        <div>
            <h3>My post</h3>
            <div className={MyPostsStyle.addPost}>
                <AddPostForm onSubmit={addNewPost}/>
            </div>
        </div>
        <div>
            <Post posts={props.posts} deletePost={props.deletePost}/>
        </div>
    </div>
)
});

export default MyPosts;