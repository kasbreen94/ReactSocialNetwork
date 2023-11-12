import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement =
        props.posts.map ( posts => <Post message={posts.message} like={posts.like}/>);

    return <div className={MyPostsStyle.posts}>
                <div>
                    <h3>My post</h3>
                    <div>
                        <div>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                    </div>
                </div>
                <div>
                    {postsElement}
                </div>
            </div>
}

export default MyPosts;