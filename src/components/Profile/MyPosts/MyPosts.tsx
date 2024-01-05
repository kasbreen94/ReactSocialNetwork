import React, {FC} from "react";
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostForm} from "./AddPostForm";
import {PostType} from "../../../redux/types/types";

type PropsTypes = {
    posts: PostType[]
}

const MyPosts: FC<PropsTypes> = React.memo(props => {

    return (
        <div className={MyPostsStyle.postsWrapper}>
            <div className={MyPostsStyle.posts}>
                <AddPostForm />
                <div>
                    <Post posts={props.posts} />
                </div>
            </div>
        </div>
)
});

export default MyPosts;