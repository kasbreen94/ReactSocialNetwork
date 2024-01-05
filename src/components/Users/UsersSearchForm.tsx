import React, {FC} from "react";
import {useForm} from "react-hook-form";
import s from "./users.module.css";
import {FilterType} from "../../redux/usersReducer";

type PropsTypes = {
    setPage: (page: number) => void
    requestUsers: (page: number, filter: FilterType) => void
    page: number
}

type FormType = {
    term: string
    friend: "true" | "false" | "null"
}

export const UsersSearchForm: FC<PropsTypes> = ({setPage, requestUsers, page}) => {
    const {
        register,
        handleSubmit,
    } = useForm<FormType>({
        mode: "onChange",
        defaultValues: {term: '', friend: 'null'}
    });

    const onFilterChange = (filter: FilterType) => {
        setPage(1)
        requestUsers(page, filter)
    }

    const onChange = (values: FormType) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        onFilterChange(filter)
    }

    return (
        <div className={s.usersSearch}>
            <form onChange={handleSubmit(onChange)}>
                <input autoComplete='off' {...register("term", {})}/>
                <select {...register("friend", {})}>
                    <option value="null">All</option>
                    <option value="true">Only follow</option>
                    <option value="false">Only unfollow</option>
                </select>
            </form>
        </div>
    )
}