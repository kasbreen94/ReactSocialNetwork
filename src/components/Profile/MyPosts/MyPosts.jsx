import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement =
        props.posts.map(posts => <Post message={posts.message} like={posts.like}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return <div className={MyPostsStyle.posts}>
        <div>
            <h3>My post</h3>
            <div className={MyPostsStyle.addPost}>
                <div>
                    <textarea
                        placeholder='Enter your text'
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
        </div>
        <div>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;