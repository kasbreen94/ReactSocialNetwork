import React from "react";
import UsersPaginator from "./UsersPaginator";
import UserCard from "./UserCard";

let Users = (props) => {
    return (
        <div>
            <UsersPaginator totalUsersCount={props.totalUsersCount}
                            pageSize={props.pageSize}
                            currentPage={props.currentPage}
                            onPageChanged={props.onPageChanged}
                            getPortionSize={props.getPortionSize}
            />
            <UserCard users={props.users}
                      followingInProgress={props.followingInProgress}
                      unfollow={props.unfollow}
                      follow={props.follow}
            />
        </div>
    )
}

export default Users;