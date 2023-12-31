import React from 'react';
import {useForm} from "react-hook-form";

export const AddMessageForm = (props) => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea placeholder="Add your text"
                {...register("newMessage", {
                    required: "Add your text",
                    minLength: {
                        value: 5,
                        message: 'min 5 symbols'

                    },
                    maxLength: 300
                })}/>
            <div>
                {errors?.textarea && <p>{errors?.textarea?.message || "Error!"}</p>}
            </div>
            <button type="submit" disabled={!isValid}>Send</button>
        </form>
    )
}