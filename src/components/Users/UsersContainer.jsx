import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, toggleFollowingProgress, unfollow} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from "../common/preloader/preloader";
import usersStyle from "./Users.module.css";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (selectedPage) => {
        this.props.getUsers(selectedPage, this.props.pageSize);
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
                />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, toggleFollowingProgress, getUsers })(UsersContainer);