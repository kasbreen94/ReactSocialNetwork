import React from 'react';
import {useForm} from "react-hook-form";
import s from "./MyPosts.module.css";

export const AddPostForm = (props) => {
    const {
        register,
        formState: {errors, isValid, isDirty},
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
        <form onSubmit={handleSubmit(onSubmit)} className={s.addPost}>
            <div>
                  <textarea placeholder="Add your text"
                            {...register("newPostText", {
                                minLength: {
                                    value: 5,
                                    message: 'min 5 symbols'
                                }
                            })}/>
                <div className={s.addPostButton}>
                    {errors?.newPostText && <p>{errors?.newPostText?.message || "Error!"}</p>}
                    <button type="submit" disabled={!isValid || !isDirty}>Add post</button>
                </div>

            </div>
            <div>

            </div>

        </form>
    )
}

