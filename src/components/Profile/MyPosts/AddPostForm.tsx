import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import s from "./MyPosts.module.css";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/profileReducer";

type NewPostFormType = {
    newPostText: string
}

export const AddPostForm = () => {
    const {
        register,
        formState: {errors, isValid, isDirty},
        handleSubmit,
        reset
    } = useForm<NewPostFormType>({
        mode: "onBlur"
    });

    const dispatch = useDispatch()

    const onSubmit = (data: NewPostFormType) => {
        dispatch(actions.addPost(data.newPostText))
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

