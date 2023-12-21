import React from 'react';
import {useForm} from "react-hook-form";
import s from "./../../ProfileInfo.module.css"


export const ContactsForm = (props) => {
    const {
        register,
        formState: {isValid},
        handleSubmit,
    } = useForm({
        mode: "onBlur",
        defaultValues: props.contacts
    });

    return (
        <div>
            <form onSubmit={handleSubmit(props.onSubmit)} className={s.loginForm}>
                <div>

                    {Object.keys(props.contacts).map(c =>
                        <div>
                            {c}:
                            <input placeholder="enter your text"
                                   {...register(`contacts.${c}`, {
                                   })}/>
                        </div>) }

                </div>
                <button type="submit" disabled={!isValid} className={s.login}>Save</button>
                <button onClick={() => props.close(false)}>Close</button>
            </form>
            {/*{response && (<p>Данные успешно отправлены</p>)}*/}
        </div>
    )
}