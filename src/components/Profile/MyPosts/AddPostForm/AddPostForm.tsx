import React from 'react';
import {useForm} from "react-hook-form";
import s from "./MyPosts.module.css";
import {useDispatch} from "react-redux";
import {addPost} from "../../../redux/profileSlice";
import {Button, TextField} from "@mui/material";

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

    let tempDate = new Date();
    let date = `${tempDate.getFullYear().toString().slice(2)}.${tempDate.getMonth()+1}.${tempDate.getDate()}`;
    let time = `${tempDate.getHours()}:${tempDate.getMinutes()}:${tempDate.getSeconds()}`
    let postDate = `${date} ${time}`

    const onSubmit = (data: NewPostFormType) => {
        dispatch(addPost({message: data.newPostText, postDate}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                  <TextField multiline
                             maxRows={4}
                             label="enter your text"
                             fullWidth
                             inputProps={{
                                 maxLength: 300
                             }}
                            {...register("newPostText", {
                                minLength: {
                                    value: 5,
                                    message: 'min 5 symbols'
                                }
                            })}/>
                <div >
                    {errors?.newPostText && <p>{errors?.newPostText?.message || "Error!"}</p>}
                    <Button type="submit" disabled={!isValid || !isDirty} size='small'>Add post</Button>
                </div>
            </div>
        </form>
    )
}

