import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, deletePost, getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
        // this.props.getUserProfile(userId);
        // this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.match.params.userId
        if (prevProps.match.params.userId !== userId) {
            this.props.getUserProfile(this.props.authUserId);
            this.props.getStatus(this.props.authUserId);
        }
        if(prevProps.status !==  this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}
                     addPost={this.props.addPost} deletePost={this.props.deletePost} posts={this.props.posts}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addPost, deletePost})
) (ProfileContainer);