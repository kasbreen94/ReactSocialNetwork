import React, {FC} from "react";
import PostStyle from './Post.module.css'
import like from '../../../../assets/images/like2.svg'
import avatar from "../../../../assets/images/avatar.svg";
import {PostType} from "../../../../redux/types/types";
import {actions} from "../../../../redux/profileReducer";
import {useDispatch} from "react-redux";

type PropsTypes = {
    posts: PostType[]
}

const Post: FC<PropsTypes> = (props) => {

    const dispatch = useDispatch()

    return (
        <>
        {[...props.posts].reverse().map(posts =>
        <div className={PostStyle.post} key={posts.id}>
            <img src={avatar} alt=''/>
                <div className={PostStyle.message}>
                    {posts.message}
                    <span onClick={() => dispatch(actions.deletePost(posts.id))} className={PostStyle.tagRemove}></span>
                </div>
                <div className={PostStyle.like}>
                    <img src={like} alt='2'/>
                    {posts.like}
                </div>
        </div>)}
        </>
    )
}

export default Post;

