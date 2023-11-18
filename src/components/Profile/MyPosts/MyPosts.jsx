import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement =
        props.posts.map ( posts => <Post message={posts.message} like={posts.like}/>);

    let newPostElement = React.createRef()

    let addPost =  () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return <div className={MyPostsStyle.posts}>
                <div>
                    <h3>My post</h3>
                    <div className={MyPostsStyle.addPost}>
                        <div>
                            <textarea ref={newPostElement}></textarea>
                        </div>
                        <div>
                            <button onClick={ addPost }>Add post</button>
                        </div>
                    </div>
                </div>
                <div>
                    {postsElement}
                </div>
            </div>
}

export default MyPosts;