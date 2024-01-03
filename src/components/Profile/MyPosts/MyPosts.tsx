import React, {FC} from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostForm} from "./AddPostForm";
import {PostType} from "../../../redux/types/types";

type PropsTypes = {
    addPost:(newPostText: string) => void
    posts: PostType[]
    deletePost: (postId: number) => void
}

const MyPosts: FC<PropsTypes> = (props) => {

    return (
        <div className={MyPostsStyle.postsWrapper}>
            <div className={MyPostsStyle.posts}>
                <AddPostForm addPost={props.addPost}/>
                <div>
                    <Post posts={props.posts} deletePost={props.deletePost} />
                </div>
            </div>
        </div>
)
};

export default MyPosts;