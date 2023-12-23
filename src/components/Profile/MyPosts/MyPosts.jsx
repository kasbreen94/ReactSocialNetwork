import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostForm} from "./AddPostFormHook";

const MyPosts = (props) => {

    console.log("RENDER")

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={MyPostsStyle.postsWrapper}>
            {/*<span>Posts</span>*/}
            <div className={MyPostsStyle.posts}>
                <AddPostForm onSubmit={addNewPost}/>

                <div>
                    <Post posts={props.posts} deletePost={props.deletePost} />
                </div>
            </div>
        </div>
)
};

export default MyPosts;