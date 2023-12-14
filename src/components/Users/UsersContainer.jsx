import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, toggleFollowingProgress, unfollow} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from "../common/preloader/preloader";
import usersStyle from "./Users.module.css";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount, getUsers
} from "../../redux/users_selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (selectedPage) => {
        this.props.requestUsers(selectedPage, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader className={usersStyle.preloader}/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       getPortionSize={this.props.getPortionSize}
                />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        getPortionSize: getPortionSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, toggleFollowingProgress, requestUsers })(UsersContainer);