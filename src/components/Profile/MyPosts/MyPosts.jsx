import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

class MyPosts extends React.Component {

    // onAddPost = () => {
    //     this.props.addPost();
    // }

    // onPostChange = (e) => {
    //     let text = e.target.value;
    //     this.props.onPostChange(text);
    // }

    render() {
        return <div className={MyPostsStyle.posts}>
            <div>
                <h3>My post</h3>
                <div className={MyPostsStyle.addPost}>
                    <div>
                    <textarea
                        placeholder='Enter your text'
                        onChange={this.props.onPostChange}
                        value={this.props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={this.props.addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                {[...this.props.posts].reverse().map(posts =>
                    <Post message={posts.message}
                          like={posts.like} key={posts.id}/>)}
            </div>
        </div>
    }
}

export default MyPosts;