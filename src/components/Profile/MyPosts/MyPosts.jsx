import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

let MyPosts = (props) => {
    return <div className={MyPostsStyle.posts}>
        <div>
            <h3>My post</h3>
            <div className={MyPostsStyle.addPost}>
                <div>
                    <textarea
                        placeholder='Enter your text'
                        onChange={props.updateNewPostText}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
        </div>
        <div>
            {[...props.posts].reverse().map(posts =>
                <Post message={posts.message}
                      like={posts.like} key={posts.id}/>)}
        </div>
    </div>}

export default MyPosts;