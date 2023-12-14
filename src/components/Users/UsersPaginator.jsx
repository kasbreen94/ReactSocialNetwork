import usersStyle from "./Users.module.css";
import React, {useEffect, useState} from "react";
import {setStatus} from "../../redux/profileReducer";

const UsersPaginator = (props, {portionSize = 10}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / portionSize));
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}


                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                    return <span className={props.currentPage === p ? usersStyle.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }} key={p.id}>{p}</span>
                })}


            {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}

export default UsersPaginator;