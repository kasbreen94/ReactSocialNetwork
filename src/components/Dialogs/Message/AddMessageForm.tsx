import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

type PropsTypes = {
    addMessage: (newMessage: string) => void
}

type NewMessageFormType = {
    newMessage: string
}

export const AddMessageForm: FC<PropsTypes> = (props) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm<NewMessageFormType>({
        mode: "onBlur"
    });

    const onSubmit = (data: NewMessageFormType) => {
        props.addMessage(data.newMessage)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea placeholder="Add your text"
                {...register("newMessage", {
                    maxLength: 300
                })}/>
            <div>
                {errors?.newMessage && <p>{errors?.newMessage?.message || "Error!"}</p>}
            </div>
            <button type="submit" disabled={!isValid}>Send</button>
        </form>
    )
}