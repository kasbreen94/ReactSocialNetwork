import s from "../users.module.css";
import React, {FC} from "react";
import {UsersType} from "../../../redux/types/types";

type PropsTypes = {
    loading: boolean
    users: UsersType[]
    currentPage: number
    setCurrentPage: (page: number) => void
    setCount: (count: number) => void
    count: number
    totalPage: number
}

export const LowerBlockPagination: FC<PropsTypes> = ({setCurrentPage, currentPage, setCount,
                                                         users, loading, count, totalPage}) => {

    return (
        <div >
            {count < users.length
                ? <button onClick={() => setCount(count + 10)} className={s.showMore} disabled={loading}>
                    {loading ? "Loading..." : "Load More"}
                </button>
                : ( (currentPage < totalPage || count === 100)
                    && <button onClick={() => {setCurrentPage(currentPage + 1);setCount(4)}}
                        className={s.showMore}>
                        NextPage
                        </button>)}
        </div>
    )
}