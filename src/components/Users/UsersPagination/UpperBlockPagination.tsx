import s from "../users.module.css";
import React, {FC} from "react";
import {UsersType} from "../../../redux/types/types";

type PropsTypes = {
    loading: boolean
    users: UsersType[]
    page: number
    totalPage: number
    setPage: (page: number) => void
    setCount: (count: number) => void
}

export const UpperBlockPagination: FC<PropsTypes> = ({setPage, page, setCount, users, loading, totalPage}) => {

    const getPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let n = Number(e.target.value)
        setPage(n)
        if (n < 1 || n > totalPage) {
            setPage(page)
        }
    }

    return (
        <>
            <div className={s.pageInput}>
                Input page number:
                <input className={s.numberPage} type="number" min={1} max={totalPage} onChange={getPage}/>
            </div>
            <div className={s.pagination}>
                <button
                    onClick={() => {
                        setPage(page - 1);
                        setCount(4)
                    }}
                    className={s.showMore} disabled={loading || page === 1}>
                    PrevPage
                </button>
                <div className={s.numberPage}>Current page: {page}</div>
                <button
                    onClick={() => {
                        setPage(page + 1);
                        setCount(4)
                    }}
                    className={s.showMore} disabled={loading || users.length < 100}>
                    NextPage
                </button>
            </div>
        </>
    )
}