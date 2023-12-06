import React from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return <div className={MyPostsStyle.posts}>
        <div>
            <h3>My post</h3>
            <div className={MyPostsStyle.addPost}>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
        </div>
        <div>
            {[...props.posts].reverse().map(posts =>
                <Post message={posts.message}
                      like={posts.like} key={posts.id}/>)}
        </div>
    </div>
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="Enter your text"
                       validate={[required, maxLength(10)]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'AddPostForm'
})(AddPostForm)

export default MyPosts;