import React from 'react';
import {useForm} from "react-hook-form";
import MyPostsStyle from "./MyPosts.module.css";

export const AddPostForm = (props) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        props.onSubmit(data)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={MyPostsStyle.addPost}>
            <textarea placeholder="Add your text"
                {...register("newPostText", {
                    required: "Add your text",
                    minLength: {
                        value: 5,
                        message: 'min 5 symbols'
                    }
                })}/>
            <div>
                {errors?.textarea && <p>{errors?.textarea?.message || "Error!"}</p>}
            </div>
            <button type="submit" disabled={!isValid}>Add post</button>
        </form>
    )
}
