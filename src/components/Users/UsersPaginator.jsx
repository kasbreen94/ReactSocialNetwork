import usersStyle from "./Users.module.css";
import React from "react";

const UsersPaginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <div className={usersStyle.numberPage}>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p ? usersStyle.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }} key={p.id}>{p}</span>
            })}
        </div>
    )
}

export default UsersPaginator;