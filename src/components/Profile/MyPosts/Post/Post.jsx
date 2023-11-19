import React from "react";
import PostStyle from './Post.module.css'
import like from './like2.svg'

const Post = (props) => {
    return (
        <div className={PostStyle.post}>
            <img
                src='https://yt3.googleusercontent.com/5qGfYBSceW4UwQ_rD-siXINsmD5HdinnNaa4xCZh23deGUow2KwrlaD6K3m5IhByDyAR0rnw0MM=s900-c-k-c0x00ffffff-no-rj'
                alt='none'/>
            <div className={PostStyle.message}>
                {props.message}
                <span className={PostStyle.tagRemove}></span>
            </div>
            <div className={PostStyle.like}>
                <img src={like} alt='2'/>
                {props.like}
            </div>
        </div>
    )
}

export default Post;