import React, {FC} from "react";
import {useForm} from "react-hook-form";
import s from "./users.module.css";
import {FilterType} from "../../redux/usersSlice";
import {getFilter} from "../../redux/selectors/users_selectors";
import {useAppSelector} from "../../redux/redux_store";

type PropsTypes = {
    setPage: (page: number) => void
    requestUsers: (page: number, filter: FilterType) => void
    page: number
}

type FriendFormType = "true" | "false" | "null"

type FormType = {
    term: string
    friend: FriendFormType
}

export const UsersSearchForm: FC<PropsTypes> = ({setPage, requestUsers, page}) => {

    const filter = useAppSelector(getFilter)

    const {
        register,
        handleSubmit,
    } = useForm<FormType>({
        mode: "onChange",
        values: {term: filter.term, friend: String(filter.friend) as FriendFormType},
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